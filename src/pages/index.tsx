import Image from 'next/image'
import Navbar from '~/components/Navbar';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getDictionary } from '~/dictionaries'
import Footer from '~/components/Footer';
import { useRouter } from 'next/router';


export default function Home({
  locale
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  return (
    <main>
      <Navbar
        locale={locale.navbar}
        onSearch={(text) =>
          router.push({
            pathname: "/search",
            query: { text },
          })
        }
      />
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
            <button className="btn btn-primary">
              {locale.index.startButton}
            </button>
          </div>
        </div>
      </div>
      <div className="hero min-h-[75vh] bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            width={400}
            height={800}
            src="/images/protest_2.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Side"
          />
          <div>
            <h1 className="text-5xl font-bold">{locale.index.userCounterTitle}</h1>
            <p className="py-6">{locale.index.userCounteSubtitle}</p>
            <button className="btn btn-primary">
              {locale.index.startButton}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      locale: getDictionary(locale)
    }
  }
}