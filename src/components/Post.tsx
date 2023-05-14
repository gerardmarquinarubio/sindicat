import Image from "next/image";
import type { Post } from "@prisma/client";
import { AiFillLike, AiFillDislike, AiFillRead } from "react-icons/ai";
import { DatesToStrings } from "~/utils/DateToString";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Post({
  name,
  content,
  media,
  id,
  type,
}: DatesToStrings<Post>) {
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
          <Image src={media} alt="Shoes" fill style={{ aspectRatio: "auto" }} />
        </figure>
      )}
      <div className="card-body">
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
