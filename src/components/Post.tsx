import type { Interaction, Post, User } from "@prisma/client";
import Image from "next/image";
import { AiFillLike, AiFillDislike, AiFillRead } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Post({
  name,
  content,
  media,
  id,
  type,
  createdAt,
  author,
}: Post & { author: User }) {
  const router = useRouter();
  function goToPostPage() {
    router.push({
      pathname: `/post/${id}`,
    });
  }
  return (
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
          <div className="badge">123 users</div>
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
  );
}
