import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { getDictionary } from "~/dictionaries";
import client from "~/prisma/client";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "~/layouts/DefaultLayout";
import { useSession } from "next-auth/react";
import Org from "~/components/Org";
import Post from "~/components/Post";
import UserModal from "~/components/UserModal";

const User: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale, user }) => {
  const session = useSession();
  const isLogged = +(session.data?.user?.id ?? "-1") === user.id;
  return (
    <section className="relative w-full flex min-h-[50vh] justify-center items-center p-10">
      <article className="card w-1/2 bg-base-300">
        {isLogged && <UserModal />}
        <div className="absolute rounded-badge w-32 h-32 right-0 top-0">
          <Image
            src={user.media ?? "/images/placeholder.png"}
            width={400}
            height={400}
            alt="profile picture"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title text-accent">{user.name}</h2>
          <p>{user.content ?? "Here goes your bio"}</p>
          <div className="mt-14 z-10">
            <p className="text-lg font-medium mb-1">Your communities</p>
            {user.orgs.map((o) => (
              <Org key={o.orgId} {...o.org} minified />
            ))}
          </div>
          <div>
            <p className="text-lg font-medium mb-1">Latest posts</p>
            {user.posts.slice(0, 3).map((post) => (
              <Post key={post.id} {...post} locale={locale} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

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

  let user = await client.user.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      posts: {
        include: {
          author: true,
          interaction: {
            include: {
              author: true,
            },
          },
        },
      },
      orgs: {
        include: {
          org: true,
        },
      },
    },
  });

  return {
    props: {
      locale: getDictionary(locale),
      user,
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

User.getLayout = (page) => {
  return <DefaultLayout locale={page.props.locale}>{page}</DefaultLayout>;
};

export default User;
