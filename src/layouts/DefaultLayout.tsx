import type { PropsWithChildren } from "react";
import type { Schema } from "~/dictionaries/schema";
import { useState, useEffect, useDeferredValue } from "react";
import { useRouter } from "next/router";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

interface IDefaultLayout extends PropsWithChildren {
  locale: Schema;
}

export default function DefaultLayout({ children, locale }: IDefaultLayout) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    if (deferredSearchQuery !== "") {
      router.push({
        pathname: "/search",
        query: { text: deferredSearchQuery },
      });
    }
  }, [deferredSearchQuery, router]);

  return (
    <main>
      <Navbar
        locale={locale.navbar}
        onSearch={setSearchQuery}
      />
      {children}
      <Footer />
    </main>
  );
}
