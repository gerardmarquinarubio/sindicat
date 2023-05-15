import { useRouter } from "next/router";
import { Schema } from "~/dictionaries/schema";

export default function LoginButton({ locale }: { locale: Schema }) {
  const router = useRouter();
  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        router.push({
          pathname: "/access",
          query: "method=register",
        })
      }
    >
      {locale.components.loginButton.label}
    </button>
  );
}
