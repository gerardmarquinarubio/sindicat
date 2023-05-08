import type { PropsWithChildren } from "react";
import type { Schema } from "~/dictionaries/schema";
import Footer from "~/components/Footer";

interface IDefaultLayout extends PropsWithChildren {
  locale: Schema;
}

export default function SimpleLayout({ children, locale }: IDefaultLayout) {
  return (
    <main>
      <div className="flex items-center justify-center p-6 w-full">
        <div className="w-2/3">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
