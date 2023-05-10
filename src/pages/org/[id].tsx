import { Org } from "@prisma/client";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { getDictionary } from "~/dictionaries";
import client from "~/prisma/client";

export default function Me({
  locale,
  org,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <Navbar locale={locale.navbar} />
      <div className="grid grid-cols-5 gap-8 py-12 px-6">
        <div className="w-full rounded bg-slate-900 h-fit col-span-2">
          <Image
            src="https://picsum.photos/1400/1200"
            alt="Org logo"
            width={1400}
            height={1200}
          />
          <div className="p-4 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-center">{org.name}</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="badge">123 users</div>
              <div className="badge badge-primary">verified</div>
            </div>
            <p>{org.content}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-3 gap-2 max-h-[60vh] overflow-scroll">
          <div></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  if (params === undefined) {
    throw new Error("Unparsed parameters");
  }

  if (typeof params.id !== "string") {
    throw new Error("No id in parameters");
  }

  const id = parseInt(params.id);
  const org = await client.org.findUniqueOrThrow({
    where: { id },
  });

  return {
    props: {
      locale: getDictionary(locale),
      org,
    },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
