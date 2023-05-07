import type { PropsWithChildren } from "react";
import type { Schema } from "~/dictionaries/schema";
import { useRouter } from "next/router";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { queryToString } from "~/utils/query";

interface IDefaultLayout extends PropsWithChildren {
  locale: Schema;
}

export default function DefaultLayout({ children, locale }: IDefaultLayout) {
  const router = useRouter();
  const search = queryToString(router.query.text);
  return (
    <main>
      <Navbar
        locale={locale.navbar}
        defaultSearch={search}
        onSearch={(text) =>
          router.push({
            pathname: "/search",
            query: { text },
          })
        }
      />
      {children}
      <Footer />
    </main>
  );
}
