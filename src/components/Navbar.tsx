import type { User } from "@prisma/client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Schema } from "~/dictionaries/schema";
import Logo from "./Logo";

type NavbarProps = {
  locale: Schema["navbar"];
  loggedUser?: User["id"];
  defaultFocused?: boolean;
  defaultSearch?: string;
  onSearch?: (text: string) => void;
};

export default function Navbar({
  locale,
  defaultFocused = false,
  defaultSearch = "",
  onSearch = () => {},
}: NavbarProps) {
  const { data: session } = useSession();
  function handleLogout() {
    signOut().then(console.warn).catch(console.error);
  }
  return (
    <nav className="navbar bg-gradient-to-r from-slate-900 to-slate-800">
      <Logo />
      <div className="flex-1">
        <div className="form-control w-full">
          <input
            type="text"
            placeholder={locale.searchPlaceholder}
            className="input input-bordered w-full"
            defaultValue={defaultSearch}
            onChange={(e) => onSearch(e.currentTarget.value)}
            autoFocus={defaultFocused}
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control"></div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-outline btn-circle avatar text-2xl"
          >
            <AiOutlineUserAdd />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-900 rounded-box w-52"
          >
            {session?.user ? (
              <>
                <li>
                  <Link href={`/user/${session.user.id}`}>{locale.userButton}</Link>
                </li>
                <li onClick={handleLogout}>
                  <a>{locale.logoutButton}</a>
                </li>
                <li>
                  <Link href={`/settings`}>{locale.settingsButton}</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href={{ pathname: "/access", query: { method: "login" } }}
                  >
                    {locale.loginButton}
                  </Link>
                </li>
                <li>
                  <Link
                    href={{
                      pathname: "/access",
                      query: { method: "register" },
                    }}
                  >
                    {locale.registerButton}
                  </Link>
                </li>
                <li>
                  <Link href={`/settings`}>{locale.settingsButton}</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
