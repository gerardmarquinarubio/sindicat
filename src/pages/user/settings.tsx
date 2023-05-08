import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import type { NextPageWithLayout } from "~/pages/_app";
import { Uploader } from "~/components/Uploader";
import { getDictionary } from "~/dictionaries";
import SimpleLayout from "~/layouts/SimpleLayout";
import { useState } from "react";

const Settings: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale }) => {
  const [newUrlProfilePicture, setNewUrlProfilePicture] = useState("");
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
      <form className="card-body">
        <Uploader onUpload={setNewUrlProfilePicture} label="Profile picture" />
        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    </div>
  );
};

Settings.getLayout = (page) => {
  return <SimpleLayout locale={page.props.locale}>{page}</SimpleLayout>;
};

export default Settings;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      locale: getDictionary(locale),
    },
  };
};
