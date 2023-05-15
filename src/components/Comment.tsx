import { Interaction } from "@prisma/client";
import { User } from "@prisma/client";
import TimeAgo from "javascript-time-ago";
import { RouterOutput } from "~/server/routers/_app";

export default function Comment({
  content,
  createdAt,
  author,
}: RouterOutput["getPosts"][number]["interaction"][number]) {
  const timeago = new TimeAgo("en");
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={author.media ?? "/images/placeholder.png"} />
        </div>
      </div>
      <div className="chat-header mb-2">
        {author.name}
        <time className="text-xs opacity-50 mx-1">
          {timeago.format(new Date(createdAt))}
        </time>
      </div>
      <div className="chat-bubble">{content}</div>
    </div>
  );
}
