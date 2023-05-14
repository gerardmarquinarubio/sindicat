import { Interaction } from "@prisma/client";
import { User } from "@prisma/client";

export default function Comment({
  content,
  createdAt,
  author,
}: Interaction & { author: User }) {
  return (
    <div>
      <p>
        Comment by {author.name} at {createdAt}
      </p>
      <p>{content}</p>
    </div>
  );
}
