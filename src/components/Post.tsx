import type { Post } from "@prisma/client";
import { AiFillLike } from "react-icons/ai";
import Link from "next/link";
import { trpc } from "~/utils/trpc";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import TimeAgo from "javascript-time-ago";
import Comment from "./Comment";
import { RouterOutput } from "~/server/routers/_app";
import { Schema } from "~/dictionaries/schema";

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
  const [likes] = partition(reactions, (i) => i.content === "👍");
  return {
    comments,
    likes,
  };
}

interface IErrors {
  post?: string;
}

type PostProps = RouterOutput["getPosts"][number] & {
  full?: boolean;
  locale: Schema;
};

export default function Post(props: PostProps) {
  const { createInteraction } = trpc.useContext();
  const session = useSession();
  const [interactions, setInteractions] = useState(props.interaction);
  const [errors, setErrors] = useState<IErrors>({});
  const timeago = new TimeAgo("en");

  const [{ comments, likes }, setCalcData] = useState(getPostData(props));
  const { full, media, content, id, name, type, author, createdAt } = props;

  useEffect(() => {
    setCalcData(getPostData({ ...props, interaction: interactions }));
  }, [interactions]);

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
    handleInteraction("👍", "Reaction");
  }

  return (
    <div
      className={
        full
          ? "flex w-full items-center justify-center p-4"
          : media
          ? "card w-full flex items-center justify-center rounded-xl order-2 overflow-hidden"
          : "card w-full flex items-center justify-center rounded-xl overflow-hidden"
      }
    >
      {media ? (
        <img
          src={media}
          alt="post image"
          className={full ? "w-1/2 mr-4" : "w-full"}
        />
      ) : (
        <div></div>
      )}
      <div className="w-full">
        <div className={"bg-slate-800 py-2 px-4"}>
          {full ? (
            <h1 className="text-xl font-bold">{name}</h1>
          ) : (
            <Link
              className="text-xl font-bold"
              href={{ pathname: `/post/${id}` }}
            >
              {name}
            </Link>
          )}

          <p className="text-sm mb-2">
            {props.locale.components.post.by}{" "}
            <Link href={`/user/${author.id}`} className="link link-accent">
              {author.name}
            </Link>
            {" " +
              timeago.format(new Date(createdAt)) +
              `, ${likes.length} likes`}
          </p>
          {content && type === "Link" ? (
            <Link href={content} className="link link-accent">
              {content}
            </Link>
          ) : (
            <p>{content}</p>
          )}
          <div className="flex gap-2 mt-2">
            <button
              className="btn btn-sm btn-outline btn-circle btn-success"
              disabled={
                !session.data?.user ||
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
          </div>
        </div>
        {full && (
          <section className="mt-2 bg-slate-800 py-2 px-4 rounded">
            <div className="w-1/2 mb-4">
              <h2 className="text-lg font-semibold mb-2">Comments</h2>
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
                className="btn btn-primary btn-sm mb-2"
                type="submit"
                disabled={!session.data?.user}
              >
                {props.locale.components.post.comment}
              </button>
            </form>
          </section>
        )}
      </div>
    </div>
  );
}
