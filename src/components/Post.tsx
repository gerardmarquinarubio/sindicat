import Image from "next/image";

export default function Post() {
  return (
    <div>
      <Image
        alt="post image"
        src="https://picsum.photos/400/400"
        width={400}
        height={400}
      />
    </div>
  );
}
