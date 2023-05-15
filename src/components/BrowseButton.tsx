import { useRouter } from "next/router";
import { Schema } from "~/dictionaries/schema";

export default function BrowseButton({ locale }: { locale: Schema }) {
  const router = useRouter();
  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        router.push({
          pathname: "/search",
        })
      }
    >
      Browse communities
    </button>
  );
}
