import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "./_app";
import { getDictionary } from "~/dictionaries";
import DefaultLayout from "~/layouts/DefaultLayout";

const Faq: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale }) => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          {locale.faq.what.label}
        </div>
        <div className="collapse-content">
          <p>{locale.faq.what.text[1]}</p>
          <p>{locale.faq.what.text[2]}</p>
          <p>{locale.faq.what.text[3]}</p>
          <p>{locale.faq.what.text[4]}</p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          {locale.faq.data.label}
        </div>
        <div className="collapse-content">
          <p>{locale.faq.data.text}</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          {locale.faq.how.label}
        </div>
        <div className="collapse-content">
          <p>{locale.faq.how.text[1]}</p>
          <ul className="list-disc pl-8">
            <li>{locale.faq.how.text[2]}</li>
            <li>{locale.faq.how.text[3]}</li>
            <li>{locale.faq.how.text[4]}</li>
          </ul>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          {locale.faq.res.label}
        </div>
        <div className="collapse-content">
          <p>{locale.faq.res.text[1]}</p>
          <ul className="list-disc pl-8">
            <li>{locale.faq.res.text[2]}</li>
            <li>{locale.faq.res.text[3]}</li>
            <li>{locale.faq.res.text[4]}</li>
            <li>{locale.faq.res.text[5]}</li>
            <li>{locale.faq.res.text[6]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Faq.getLayout = (page) => {
  return <DefaultLayout locale={page.props.locale}>{page}</DefaultLayout>;
};

export default Faq;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      locale: getDictionary(locale),
    },
  };
};
