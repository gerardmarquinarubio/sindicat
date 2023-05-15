import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="footer p-10 text-base-content bg-gradient-to-l from-slate-900 to-slate-800">
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">TOS & Conditions</a>
        <a className="link link-hover">Privacy & GDPR</a>
        <a className="link link-hover">Licenses</a>
      </div>
      <div>
        <span className="footer-title">FAQ</span>
        <a className="link link-hover">Who are we?</a>
        <a className="link link-hover">Do you collect my data?</a>
        <a className="link link-hover">How was this made?</a>
        <a className="link link-hover">Where can I find more resources?</a>
      </div>
      <div>
        <span className="footer-title">Resources</span>
        <a className="link link-hover">Your rights as a worker</a>
        <a className="link link-hover">Quotes & media</a>
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
