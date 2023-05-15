import Link from "next/link";
import { useRouter } from "next/router";
import { Schema } from "~/dictionaries/schema";

export default function Footer({ locale }: { locale: Schema }) {
  const router = useRouter();
  return (
    <footer className="footer p-10 text-base-content bg-gradient-to-l from-slate-900 to-slate-800">
      <div>
        <Link
          href={{
            pathname: "/legal",
          }}
          className="footer-title"
        >
          {locale.footer.legal.label}
        </Link>
        <Link
          href={{
            pathname: "/legal",
          }}
          className="link link-hover"
        >
          {locale.footer.legal.tos}
        </Link>
        <Link
          href={{
            pathname: "/legal",
          }}
          className="link link-hover"
        >
          {locale.footer.legal.privacy}
        </Link>
        <Link
          href={{
            pathname: "/legal",
          }}
          className="link link-hover"
        >
          {locale.footer.legal.licenses}
        </Link>
      </div>
      <div>
        <Link
          href={{
            pathname: "/faq",
          }}
          className="footer-title"
        >
          {locale.footer.faq.label}
        </Link>
        <Link
          href={{
            pathname: "/faq",
          }}
          className="link link-hover"
        >
          {locale.footer.faq.who}
        </Link>
        <Link
          href={{
            pathname: "/faq",
          }}
          className="link link-hover"
        >
          {locale.footer.faq.data}
        </Link>
        <Link
          href={{
            pathname: "/faq",
          }}
          className="link link-hover"
        >
          {locale.footer.faq.how}
        </Link>
        <Link
          href={{
            pathname: "/faq",
          }}
          className="link link-hover"
        >
          {locale.footer.faq.res}
        </Link>
      </div>
      <div>
        <Link
          href={{
            pathname: "/resources",
          }}
          className="footer-title"
        >
          {locale.footer.res.label}
        </Link>
        <Link
          href={{
            pathname: "/resources",
          }}
          className="link link-hover"
        >
          {locale.footer.res.rights}
        </Link>
        <Link
          href={{
            pathname: "/resources",
          }}
          className="link link-hover"
        >
          {locale.footer.res.quotes}
        </Link>
      </div>
      <div>
        <select
          defaultValue={router.locale}
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => {
            router.push(router.asPath, router.asPath, {
              locale: e.currentTarget.value,
            });
          }}
        >
          <option value={"en"}>English</option>
          <option value={"es"}>Español</option>
          <option value={"ca"}>Català</option>
          <option value={"de"}>Deutsch</option>
        </select>
      </div>
    </footer>
  );
}
