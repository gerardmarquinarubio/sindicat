import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { getDictionary } from "~/dictionaries";
import client from "~/prisma/client";
import { type Post as IPost, PostType } from "@prisma/client";
import PostModal from "~/components/PostModal";
import { trpc } from "~/utils/trpc";
import { useEffect, useState } from "react";
import Post from "~/components/Post";
import { ObjectMappable } from "~/utils/ObjectMappable";

type Filter = PostType | "all";

const DEFAULT_FILTER: Filter = "all";

export default function Org({
  locale,
  org,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { getPosts } = trpc.useContext();
  type getPostsResult = Awaited<ReturnType<(typeof getPosts)["fetch"]>>;
  const [posts, setPosts] = useState<getPostsResult>([]);
  const [filterPosts, setFilterPosts] = useState(DEFAULT_FILTER);
  function fetchPosts() {
    getPosts
      .fetch({ org: org.id, type: filterPosts })
      .then(setPosts)
      .catch(console.error);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchPosts, [filterPosts]);
  return (
    <main>
      <Navbar locale={locale.navbar} />
      <div className="md:grid grid-cols-5 gap-8 py-12 px-6">
        <div className="w-full rounded bg-slate-900 h-fit col-span-2">
          <Image
            src={org.media ?? "images/placeholder.png"}
            alt="Org logo"
            width={1400}
            height={1200}
          />
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-center">{org.name}</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="badge">{org.users.length} users</div>
              {org.verification ? (
                <div className="badge badge-primary">verified</div>
              ) : (
                <div className="badge badge-warning">unverified</div>
              )}
            </div>
            <p>{org.content}</p>
          </div>
        </div>
        <div className="col-span-3">
          <div className="from-slate-800 to-slate-900 bg-gradient-to-r h-32 md:h-12 flex flex-col md:flex-row md:items-center md:space-between gap-2 px-2 rounded-2xl mt-2 md:mt-0 justify-center">
            <div className="badge badge-lg mr-auto">{posts.length} posts</div>
            <select
              className="select select-bordered select-sm md:max-w-xs"
              defaultValue={DEFAULT_FILTER}
              onChange={(e) =>
                setFilterPosts(e.currentTarget.value as PostType)
              }
            >
              <option value="all">Show all post types</option>
              {Object.keys(PostType).map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <PostModal org={org.id} onPost={fetchPosts} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-scroll p-4 my-2">
            {posts.map((p) => (
              <Post key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export const getStaticProps = async ({
  locale,
  params,
}: GetStaticPropsContext) => {
  if (params === undefined) {
    throw new Error("Unparsed parameters");
  }

  if (typeof params.id !== "string") {
    throw new Error("No id in parameters");
  }

  const id = parseInt(params.id);
  const org = await client.org.findUniqueOrThrow({
    where: { id },
    include: {
      users: true,
    },
  });

  return {
    props: {
      locale: getDictionary(locale),
      org,
    },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
