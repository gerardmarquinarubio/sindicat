import { User } from "@prisma/client";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { getDictionary } from "~/dictionaries";
import client from "~/prisma/client";

export default function Me({
  locale,
  user,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <Navbar locale={locale.navbar} />
      <section className="w-full flex min-h-[50vh] justify-center items-center p-10">
        <article className="card w-1/2 bg-base-300">
          <figure>
            <div className="rounded-full">
              <Image
                width={800}
                height={400}
                src="https://picsum.photos/800/400"
                alt="User"
              />
            </div>
          </figure>
          <Image
            className="absolute rounded-badge w-32 h-32 right-0 -translate-x-4 translate-y-4"
            src="/images/face.jpg"
            width={400}
            height={400}
            alt="profile picture"
          />
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.content}</p>
          </div>
        </article>
      </section>
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
  let user: User;

  if (id === 123) {
    user = {
      id: 123,
      content: "Hola este es un usuario de prueba!",
      createdAt: "2023/02/11",
      updatedAt: "2023/03/14",
      email: "gerardmarquina@gmail.com",
      name: "Gerard Marquina Rubio",
      role: "Admin",
      socials: ["https://github.com/gerardmarquinarubio"],
      visibility: "Public",
    } as unknown as User;
  } else {
    user = await client.user.findUniqueOrThrow({
      where: { id },
    });
  }

  return {
    props: {
      locale: getDictionary(locale),
      user: user as User,
    },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
  return {
    paths: ["/user/123"],
    fallback: "blocking",
  };
};
