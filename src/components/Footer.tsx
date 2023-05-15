import { useRouter } from "next/router";
import { Schema } from "~/dictionaries/schema";

export default function Footer({ locale }: { locale: Schema }) {
  const router = useRouter();
  return (
    <footer className="footer p-10 text-base-content bg-gradient-to-l from-slate-900 to-slate-800">
      <div>
        <span className="footer-title">{locale.footer.legal.label}</span>
        <a className="link link-hover">{locale.footer.legal.tos}</a>
        <a className="link link-hover">{locale.footer.legal.privacy}</a>
        <a className="link link-hover">{locale.footer.legal.licenses}</a>
      </div>
      <div>
        <span className="footer-title">{locale.footer.faq.label}</span>
        <a className="link link-hover">{locale.footer.faq.who}</a>
        <a className="link link-hover">{locale.footer.faq.data}</a>
        <a className="link link-hover">{locale.footer.faq.how}</a>
        <a className="link link-hover">{locale.footer.faq.res}</a>
      </div>
      <div>
        <span className="footer-title">{locale.footer.res.label}</span>
        <a className="link link-hover">{locale.footer.res.rights}</a>
        <a className="link link-hover">{locale.footer.res.quotes}</a>
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
        </select>
      </div>
    </footer>
  );
}
