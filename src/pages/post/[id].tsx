import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { getDictionary } from "~/dictionaries";
import client from "~/prisma/client";
import { NextPageWithLayout } from "../_app";
import DefaultLayout from "~/layouts/DefaultLayout";

const Post: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale }) => {
  return <></>;
};

Post.getLayout = (page) => {
  return <DefaultLayout locale={page.props.locale}>{page}</DefaultLayout>;
};

export default Post;

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
  const org = await client.org.findUniqueOrThrow({
    where: { id },
    include: {
      users: true,
    },
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
