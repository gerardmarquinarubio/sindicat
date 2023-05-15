import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { getDictionary } from "~/dictionaries";
import client from "~/prisma/client";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "~/layouts/DefaultLayout";
import Post from "~/components/Post";

interface IErrors {
  post?: string;
}

const PostPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale, post }) => {
  return <Post {...post} full locale={locale} />;
};

PostPage.getLayout = (page) => {
  return <DefaultLayout locale={page.props.locale}>{page}</DefaultLayout>;
};

export default PostPage;

export const getStaticProps = async ({
  locale,
  params,
}: GetStaticPropsContext) => {
  if (params === undefined) {
    throw new Error("Unparsed parameters");
  }

  if (typeof params.id !== "string") {
    throw new Error("No id in parameters");
  }

  const id = parseInt(params.id);
  const post = await client.post.findUniqueOrThrow({
    where: { id },
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
      post,
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
