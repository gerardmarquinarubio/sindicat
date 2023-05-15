import type { NextPageWithLayout } from "./_app";
import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Image from "next/image";
import BrowseButton from "~/components/BrowseButton";
import LoginButton from "~/components/LoginButton";
import Post from "~/components/Post";
import { getDictionary } from "~/dictionaries";
import DefaultLayout from "~/layouts/DefaultLayout";
import prisma from "~/prisma/client";

const Home: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale, randomPost }) => {
  return (
    <>
      <div
        className="hero min-h-[75vh]"
        style={{
          backgroundImage: `url("/images/protest_1.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{locale.index.greeting}</h1>
            <p className="mb-5">{locale.index.subtitle}</p>
            <LoginButton locale={locale} />
          </div>
        </div>
      </div>
      <div className="hero min-h-[75vh] bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {randomPost ? (
            <Post {...randomPost} locale={locale} />
          ) : (
            <Image
              width={800}
              height={1200}
              src="/images/protest_2.jpg"
              className="max-w-md lg:max-w-xl rounded-lg shadow-2xl"
              alt="Side"
            />
          )}
          <div>
            <h1 className="text-5xl font-bold">
              {locale.index.userCounterTitle}
            </h1>
            <p className="py-6">{locale.index.userCounteSubtitle}</p>
            <BrowseButton locale={locale} />
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = (page) => {
  return <DefaultLayout locale={page.props.locale}>{page}</DefaultLayout>;
};

export default Home;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const max = await prisma.post.count();
  const random = Math.max(Math.random() * max, 1);
  const randomPost = await prisma.post.findUnique({
    where: {
      id: random,
    },
    include: {
      author: true,
      interaction: {
        include: {
          author: true,
        },
      },
    },
  });
  return {
    props: {
      locale: getDictionary(locale),
      randomPost,
    },
    revalidate: 60,
  };
};
