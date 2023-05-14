import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { getDictionary } from "~/dictionaries";
import client from "~/prisma/client";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "~/layouts/DefaultLayout";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { trpc } from "~/utils/trpc";
import Comment from "~/components/Comment";

interface IErrors {
  post?: string;
}

const PostPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale, post }) => {
  const { createInteraction } = trpc.useContext();
  const session = useSession();
  const [interactions, setInteractions] = useState(post.interaction);
  const [errors, setErrors] = useState<IErrors>({});

  function handleComment(comment: string) {
    createInteraction
      .fetch({
        content: comment,
        post: post.id,
      })
      .then((n) => setInteractions((prev) => [...prev, n]))
      .catch(console.error);
  }

  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="card from-slate-800 to-slate-900 bg-gradient-to-l min-w-full">
        {post.media && (
          <figure className="relative w-full h-32 cursor-pointer">
            <Image
              src={post.media}
              alt="post image"
              fill
              style={{ aspectRatio: "auto" }}
            />
          </figure>
        )}
        <div className="card-body">
          <h1 className="text-xl font-bold">{post.name}</h1>
          <p>
            by{" "}
            <Link href={`/user/${post.author.id}`} className="link link-accent">
              {post.author.name}
            </Link>{" "}
            {`on the ${new Date(post.createdAt).toISOString().split("T")[0]}`}
          </p>
          {post.content && post.type === "Link" ? (
            <Link href={post.content} className="link link-accent">
              {post.content}
            </Link>
          ) : (
            <p>{post.content}</p>
          )}
          <section className="mt-4">
            <h2 className="text-lg font-semibold">Comments</h2>
            {interactions
              .filter((interaction) => interaction.type === "Comment")
              .map((interaction) => (
                <Comment key={interaction.id} {...interaction} />
              ))}
            <form
              className="flex flex-col items-start w-96 gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                const comment = (e.currentTarget.elements as any).comment
                  .value as string;
                if (!comment) {
                  setErrors((prev) => ({ ...prev, post: "cannot be empty" }));
                }
                handleComment(comment);
              }}
            >
              <textarea
                className="textarea textarea-bordered w-full"
                name="comment"
              ></textarea>
              <button
                className="btn btn-primary self-end btn-sm"
                type="submit"
                disabled={!session.data?.user}
              >
                Comment
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

PostPage.getLayout = (page) => {
  return <DefaultLayout locale={page.props.locale}>{page}</DefaultLayout>;
};

export default PostPage;

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
  const post = await client.post.findUniqueOrThrow({
    where: { id },
    include: {
      author: true,
      interaction: {
        include: {
          author: true,
        },
      },
    },
  });

  return {
    props: {
      locale: getDictionary(locale),
      post,
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
