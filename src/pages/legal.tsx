import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { NextPageWithLayout } from "./_app";
import { getDictionary } from "~/dictionaries";
import DefaultLayout from "~/layouts/DefaultLayout";

const Legal: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale }) => {
  return (
    <div className="flex flex-col gap-1 p-2">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title textl-lg font-medium">
          {locale.legal.terms.label}
        </div>
        <div className="collapse-content">
          <p>{locale.legal.terms.text["1"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["2"]}
          </h2>
          <p>{locale.legal.terms.text["3"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["4"]}
          </h2>
          <p>{locale.legal.terms.text["5"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["6"]}
          </h2>
          <p>{locale.legal.terms.text["7"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["8"]}
          </h2>
          <p>{locale.legal.terms.text["9"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["10"]}
          </h2>
          <p>{locale.legal.terms.text["11"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["12"]}
          </h2>
          <p>{locale.legal.terms.text["13"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["14"]}
          </h2>
          <p>{locale.legal.terms.text["15"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["16"]}
          </h2>
          <p>{locale.legal.terms.text["17"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["18"]}
          </h2>
          <p>{locale.legal.terms.text["19"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["20"]}
          </h2>
          <p>{locale.legal.terms.text["21"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["22"]}
          </h2>
          <p>{locale.legal.terms.text["23"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["24"]}
          </h2>
          <p>{locale.legal.terms.text["25"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["26"]}
          </h2>
          <p>{locale.legal.terms.text["27"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["28"]}
          </h2>
          <p>{locale.legal.terms.text["29"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.terms.text["30"]}
          </h2>
          <p>{locale.legal.terms.text["31"]}</p>
          <p>{locale.legal.terms.text["32"]}</p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title textl-lg font-medium">
          {locale.legal.privacy.label}
        </div>
        <div className="collapse-content">
          <p>{locale.legal.privacy.text["1"]}</p>
          <h2 className="text-lg font-semibold">
            {locale.legal.privacy.text["2"]}
          </h2>
          <p>{locale.legal.privacy.text["3"]}</p>
          <h2 className="textl-lg font-semibold">
            {locale.legal.privacy.text["4"]}
          </h2>
          <p>{locale.legal.privacy.text["5"]}</p>
          <h2 className="textl-lg font-semibold">
            {locale.legal.privacy.text["6"]}
          </h2>
          <p>{locale.legal.privacy.text["7"]}</p>
          <h2 className="textl-lg font-semibold">
            {locale.legal.privacy.text["8"]}
          </h2>
          <p>{locale.legal.privacy.text["9"]}</p>
          <h2 className="textl-lg font-semibold">
            {locale.legal.privacy.text["10"]}
          </h2>
          <p>{locale.legal.privacy.text["11"]}</p>
          <h2 className="textl-lg font-semibold">
            {locale.legal.privacy.text["12"]}
          </h2>
          <p>{locale.legal.privacy.text["13"]}</p>
          <h2 className="textl-lg font-semibold">
            {locale.legal.privacy.text["14"]}
          </h2>
          <p>{locale.legal.privacy.text["15"]}</p>
          <h2 className="textl-lg font-semibold">
            {locale.legal.privacy.text["16"]}
          </h2>
          <p>{locale.legal.privacy.text["17"]}</p>
          <p>{locale.legal.privacy.text["18"]}</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title textl-lg font-medium">
          {locale.legal.licenses.label}
        </div>
        <div className="collapse-content">
          <p>{locale.legal.licenses.text["1"]}</p>
          <ul className="list-disc pl-8">
            <li>{locale.legal.licenses.text["1"]}</li>
            <li>{locale.legal.licenses.text["2"]}</li>
            <li>{locale.legal.licenses.text["3"]}</li>
            <li>{locale.legal.licenses.text["4"]}</li>
            <li>{locale.legal.licenses.text["5"]}</li>
            <li>{locale.legal.licenses.text["6"]}</li>
            <li>{locale.legal.licenses.text["7"]}</li>
            <li>{locale.legal.licenses.text["8"]}</li>
            <li>{locale.legal.licenses.text["9"]}</li>
            <li>{locale.legal.licenses.text["10"]}</li>
            <li>{locale.legal.licenses.text["11"]}</li>
            <li>{locale.legal.licenses.text["12"]}</li>
            <li>{locale.legal.licenses.text["13"]}</li>
            <li>{locale.legal.licenses.text["14"]}</li>
            <li>{locale.legal.licenses.text["15"]}</li>
            <li>{locale.legal.licenses.text["16"]}</li>
            <li>{locale.legal.licenses.text["17"]}</li>
            <li>{locale.legal.licenses.text["18"]}</li>
            <li>{locale.legal.licenses.text["19"]}</li>
            <li>{locale.legal.licenses.text["20"]}</li>
            <li>{locale.legal.licenses.text["21"]}</li>
            <li>{locale.legal.licenses.text["22"]}</li>
            <li>{locale.legal.licenses.text["23"]}</li>
            <li>{locale.legal.licenses.text["24"]}</li>
            <li>{locale.legal.licenses.text["25"]}</li>
            <li>{locale.legal.licenses.text["26"]}</li>
            <li>{locale.legal.licenses.text["27"]}</li>
            <li>{locale.legal.licenses.text["28"]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Legal.getLayout = (page) => {
  return <DefaultLayout locale={page.props.locale}>{page}</DefaultLayout>;
};

export default Legal;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      locale: getDictionary(locale),
    },
  };
};
