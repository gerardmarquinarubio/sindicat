import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="footer p-10 text-base-content bg-gradient-to-l from-slate-900 to-slate-800">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
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
