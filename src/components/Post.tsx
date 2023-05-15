import type { Interaction, Post, User } from "@prisma/client";
import Image from "next/image";
import { AiFillLike, AiFillDislike, AiFillRead } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { trpc } from "~/utils/trpc";
import { useSession } from "next-auth/react";
import { useState } from "react";
import TimeAgo from "javascript-time-ago";
import Comment from "./Comment";
import { RouterOutput } from "~/server/routers/_app";

function partition<T>(array: T[], isValid: (arg: T) => boolean) {
  return array.reduce<[T[], T[]]>(
    ([pass, fail], elem) =>
      isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]],
    [[], []]
  );
}

function getPostData(post: RouterOutput["getPosts"][number]) {
  const [comments, reactions] = partition(
    post.interaction,
    (i) => i.type === "Comment"
  );
  const [likes, dislikes] = partition(reactions, (i) => i.content === "👍");
  return {
    comments,
    likes,
    dislikes,
  };
}

interface IErrors {
  post?: string;
}

type PostProps = RouterOutput["getPosts"][number] & { full?: boolean };

export default function Post(props: PostProps) {
  const router = useRouter();
  const { createInteraction } = trpc.useContext();
  const session = useSession();
  const [interactions, setInteractions] = useState(props.interaction);
  const [errors, setErrors] = useState<IErrors>({});
  const timeago = new TimeAgo("en");

  const { comments, dislikes, likes } = getPostData(props);
  const { full, media, content, id, name, type, author, createdAt } = props;

  function goToPostPage() {
    router.push({
      pathname: `/post/${id}`,
    });
  }

  function handleInteraction(comment: string, type = "Comment") {
    createInteraction
      .fetch({
        content: comment,
        post: props.id,
        type,
      })
      .then((n) => setInteractions((prev) => [...prev, n]))
      .catch(console.error);
  }

  function handleLike() {
    handleInteraction("👍", "Interaction");
  }

  function handleDislike() {
    handleInteraction("👎", "Interaction");
  }

  return (
    <>
      {full ? (
        <div className="flex w-full items-center justify-center p-4">
          <div className="card from-slate-800 to-slate-900 bg-gradient-to-l min-w-full">
            {media && (
              <figure className="mt-20">
                <img src={media} alt="post image" className="max-w-lg" />
              </figure>
            )}
            <div className="card-body">
              <h1 className="text-xl font-bold">{name}</h1>
              <p>
                by{" "}
                <Link href={`/user/${author.id}`} className="link link-accent">
                  {author.name}
                </Link>{" "}
                {timeago.format(new Date(createdAt))} {likes.length}
                {" likes"}
              </p>
              {content && type === "Link" ? (
                <Link href={content} className="link link-accent">
                  {content}
                </Link>
              ) : (
                <p>{content}</p>
              )}
              <div className="flex gap-2">
                <button
                  className="btn btn-sm btn-outline btn-circle btn-success"
                  disabled={
                    likes.find(
                      (i) =>
                        i.authorId === +(session.data?.user?.id ?? "-1") &&
                        i.type === "Reaction"
                    ) !== undefined
                  }
                  onClick={handleLike}
                >
                  <AiFillLike />
                </button>
                <button
                  className="btn btn-sm btn-outline btn-circle btn-error"
                  disabled={
                    dislikes.find(
                      (i) =>
                        i.authorId === +(session.data?.user?.id ?? "-1") &&
                        i.type === "Reaction"
                    ) !== undefined
                  }
                  onClick={handleDislike}
                >
                  <AiFillDislike />
                </button>
              </div>
              <section className="mt-4">
                <div className="w-1/2 my-2">
                  <h2 className="text-lg font-semibold">Comments</h2>
                  {interactions
                    .filter((interaction) => interaction.type === "Comment")
                    .map((interaction) => (
                      <Comment key={interaction.id} {...interaction} />
                    ))}
                </div>
                <form
                  className="flex flex-col items-start w-96 gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const comment = (e.currentTarget.elements as any).comment
                      .value as string;
                    if (!comment) {
                      setErrors((prev) => ({
                        ...prev,
                        post: "cannot be empty",
                      }));
                    }
                    handleInteraction(comment);
                  }}
                >
                  <textarea
                    className="textarea textarea-bordered w-full"
                    name="comment"
                  ></textarea>

                  <button
                    className="btn btn-primary btn-sm self-end"
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
      ) : (
        <div className="card w-full bg-base-200 shadow-lg">
          {media && (
            <figure
              className="relative w-full h-32 cursor-pointer"
              onClick={goToPostPage}
            >
              <Image
                src={media}
                alt="post image"
                fill
                style={{ aspectRatio: "auto" }}
              />
            </figure>
          )}
          <div className="card-body">
            <p>
              by{" "}
              <Link href={`/user/${author.id}`} className="link link-accent">
                {author.name}
              </Link>{" "}
              {`on the ${new Date(createdAt).toISOString().split("T")[0]}`}
            </p>
            <h2 className="card-title cursor-pointer" onClick={goToPostPage}>
              {name}
            </h2>
            <div className="flex gap-1">
              <div className="badge">
                {
                  likes.filter(
                    (i) => i.type === "Reaction" && i.content === "👍"
                  ).length
                }{" "}
                likes
              </div>
              <div className="badge">
                {interactions.filter((i) => i.type === "Comment").length}{" "}
                comments
              </div>
            </div>
            {content && type === "Link" ? (
              <Link href={content} className="link link-accent">
                {content}
              </Link>
            ) : (
              <p>{content}</p>
            )}
            <div className="card-actions justify-end mt-auto">
              <button className="btn btn-sm btn-outline btn-circle btn-success">
                <AiFillLike />
              </button>
              <button className="btn btn-sm btn-outline btn-circle btn-error">
                <AiFillDislike />
              </button>
              <button
                className="btn btn-sm btn-outline btn-circle btn-info"
                onClick={goToPostPage}
              >
                <AiFillRead />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
