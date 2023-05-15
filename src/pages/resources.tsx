import BrowseButton from "~/components/BrowseButton";
import { NextPageWithLayout } from "./_app";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getDictionary } from "~/dictionaries";
import DefaultLayout from "~/layouts/DefaultLayout";
import LoginButton from "~/components/LoginButton";

const Resources: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale }) => {
  return (
    <div>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: `url("/images/protest_7.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{locale.res.title}</h1>
            <p className="mb-5">{locale.res.subtitle}</p>
            <BrowseButton locale={locale} />
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/children.jpeg"
            className="max-w-md lg:max-w-xl rounded-lg shadow-2xl"
            alt="child labor"
          />
          <div>
            <h1 className="text-5xl font-bold">{locale.res.hero1.title}</h1>
            <p className="py-6">{locale.res.hero1.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="carousel w-full" id="0">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images/bakunin.jpeg" className="w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <blockquote className="text-2xl font-bol z-10 bg-slate-900/80 rounded p-4 flex flex-col">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              {locale.res.quotes[1].label}
              <p className="text-xl text-right">
                {locale.res.quotes[1].author}
              </p>
            </blockquote>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/steve_biko.webp" className="w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <blockquote className="text-2xl font-bol z-10 bg-slate-900/80 rounded p-4 flex flex-col">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              {locale.res.quotes[2].label}
              <p className="text-xl text-right">
                {locale.res.quotes[2].author}
              </p>
            </blockquote>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/emma_goldman.jpeg" className="w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <blockquote className="text-2xl font-bol z-10 bg-slate-900/80 rounded p-4 flex flex-col">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              {locale.res.quotes[3].label}
              <p className="text-xl text-right">
                {locale.res.quotes[3].author}
              </p>
            </blockquote>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/images/rosa_luxemburg.jpeg" className="w-full" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <blockquote className="text-2xl font-bol z-10 bg-slate-900/80 rounded p-4 flex flex-col">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              {locale.res.quotes[4].label}
              <p className="text-xl text-right">
                {locale.res.quotes[4].author}
              </p>
            </blockquote>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/images/women.jpeg"
            className="max-w-md lg:max-w-xl rounded-lg shadow-2xl"
            alt="women suffrage"
          />
          <div>
            <h1 className="text-5xl font-bold">{locale.res.hero2.title}</h1>
            <p className="py-6">{locale.res.hero2.subtitle}</p>
            <LoginButton locale={locale} />
          </div>
        </div>
      </div>
    </div>
  );
};

Resources.getLayout = (page) => {
  return <DefaultLayout locale={page.props.locale}>{page}</DefaultLayout>;
};

export default Resources;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      locale: getDictionary(locale),
    },
  };
};
