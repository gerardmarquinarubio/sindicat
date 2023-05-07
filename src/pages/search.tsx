import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Org, { RequiredOrgProps } from "~/components/Org";
import { getDictionary } from "~/dictionaries";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "~/layouts/DefaultLayout";
import { queryToString } from "~/utils/query";

const MOCK_ORGS: RequiredOrgProps[] = [
  {
    id: 1234,
    createdAt: new Date("2023/01/01"),
    updatedAt: new Date("2023/02/12"),
    name: "Amazon",
    content:
      "Amazon is the leading company in customer deliveries, media and internet services",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=1",
    verification: 1,
  },
  {
    id: 4321,
    createdAt: new Date("2023/04/03"),
    updatedAt: new Date("2023/05/09"),
    name: "Starbucks",
    content:
      "Welcome to starbucks, a company where brewed coffee is our passion",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=2",
    verification: 1,
  },
  {
    id: 1111,
    createdAt: new Date("2023/01/01"),
    updatedAt: new Date("2023/02/12"),
    name: "Microsoft",
    content: "Microsoft is the leading software company all around the world",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=3",
    verification: 1,
  },
  {
    id: 2222,
    createdAt: new Date("2023/04/03"),
    updatedAt: new Date("2023/05/09"),
    name: "Railworkers US",
    content:
      "Railworkers of america, train opperators and track builders welcome!",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=4",
    verification: 0,
  },
  {
    id: 5678,
    createdAt: new Date("2023/06/30"),
    updatedAt: new Date("2023/07/22"),
    name: "Tesla",
    content: "Tesla is a sustainable energy and electric vehicle company.",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=5",
    verification: 1,
  },
  {
    id: 9012,
    createdAt: new Date("2023/08/15"),
    updatedAt: new Date("2023/09/20"),
    name: "SpaceX",
    content:
      "SpaceX is revolutionizing space technology with reusable rockets and spacecraft.",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=6",
    verification: 1,
  },
  {
    id: 3456,
    createdAt: new Date("2023/10/10"),
    updatedAt: new Date("2023/11/15"),
    name: "Oracle",
    content:
      "Oracle provides enterprise software solutions for database management and cloud computing.",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=7",
    verification: 1,
  },
  {
    id: 7890,
    createdAt: new Date("2023/12/01"),
    updatedAt: new Date("2024/01/05"),
    name: "Airbnb",
    content:
      "Airbnb is an online marketplace for short-term lodging and vacation rentals.",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=8",
    verification: 1,
  },
  {
    id: 3458,
    createdAt: new Date("2023/01/15"),
    updatedAt: new Date("2023/02/28"),
    name: "Google",
    content:
      "Google is a multinational technology company that specializes in internet-related services and products",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=9",
    verification: 1,
  },
  {
    id: 7891,
    createdAt: new Date("2023/03/01"),
    updatedAt: new Date("2023/04/15"),
    name: "Apple",
    content:
      "Apple designs and manufactures consumer electronics, computer software, and online services",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=10",
    verification: 1,
  },
  {
    id: 2468,
    createdAt: new Date("2023/02/15"),
    updatedAt: new Date("2023/04/01"),
    name: "IBM",
    content:
      "IBM is a multinational technology company that offers hardware, software, and consulting services",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=11",
    verification: 1,
  },
  {
    id: 1357,
    createdAt: new Date("2023/01/30"),
    updatedAt: new Date("2023/03/12"),
    name: "Facebook",
    content:
      "Facebook is a social networking company that develops products to connect people with friends and family",
    visibility: "Public",
    media: "https://picsum.photos/500/200?random=12",
    verification: 1,
  },
];

const Search: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale }) => {
  const router = useRouter();
  const search = queryToString(router.query.text);
  const [hideUnverified, setHideUnverified] = useState<boolean>(false);
  const [sortMode, setSortMode] = useState<number>(0);
  return (
    <>
      <div className="grid grid-cols-4 gap-8 py-12 px-6">
        <div className="w-full rounded p-2 bg-slate-900 h-fit">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">
                {locale.search.toggles.filterUnverified}
              </span>
              <input
                type="checkbox"
                checked={hideUnverified}
                className="checkbox"
                onChange={(e) => {
                  setHideUnverified((prev) => !prev);
                }}
              />
            </label>
            <select
              className="select w-full max-w-xs"
              defaultValue={sortMode}
              onSelect={(e) => {
                setSortMode(+e.currentTarget.value);
              }}
            >
              <option value={0}>{locale.search.sort.modes.activity.asc}</option>
              <option value={1}>
                {locale.search.sort.modes.activity.desc}
              </option>
              <option value={2}>{locale.search.sort.modes.newest.asc}</option>
              <option value={3}>{locale.search.sort.modes.newest.desc}</option>
              <option value={4}>
                {locale.search.sort.modes.userCount.asc}
              </option>
              <option value={5}>
                {locale.search.sort.modes.userCount.desc}
              </option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-3 gap-2 max-h-[60vh] overflow-scroll">
          {MOCK_ORGS.length === 0 ? (
            <div className="flex flex-col items-center col-span-2">
              <div className="text-5xl">🙁</div>
              <h3 className="text-xl font-medium">Nothing found</h3>
              <p>The organization might be private or not exist yet</p>
            </div>
          ) : (
            MOCK_ORGS.filter((org) => {
              let passes = org.name.includes(search);
              if (hideUnverified && passes) {
                passes = org.verification > 0;
              }
              return passes;
            }).map((org) => <Org key={org.id} {...org} minified={true} />)
          )}
        </div>
      </div>
    </>
  );
};

Search.getLayout = (page) => {
  return <DefaultLayout locale={page.props.locale}>{page}</DefaultLayout>;
};

export default Search;

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      locale: getDictionary(locale),
    },
  };
};
