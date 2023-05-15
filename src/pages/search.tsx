import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Org, { RequiredOrgProps } from "~/components/Org";
import { getDictionary } from "~/dictionaries";
import { NextPageWithLayout } from "./_app";
import DefaultLayout from "~/layouts/DefaultLayout";
import { queryToString } from "~/utils/query";
import { trpc } from "~/utils/trpc";

const Search: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ locale }) => {
  const router = useRouter();
  const search = queryToString(router.query.text);
  const { searchOrgs } = trpc.useContext();
  const [orgs, setOrgs] = useState<any[]>([]);
  useEffect(() => {
    searchOrgs.fetch({ search }).then(setOrgs).catch(console.error);
  }, [search, searchOrgs]);
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
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-3 gap-2 max-h-[60vh] overflow-y-scroll">
          {orgs.length === 0 ? (
            <div className="flex flex-col items-center col-span-2">
              <div className="text-5xl">🙁</div>
              <h3 className="text-xl font-medium">
                {locale.search.lost.title}
              </h3>
              <p>{locale.search.lost.subtitle}</p>
            </div>
          ) : (
            orgs
              .filter((org) => {
                let passes = org.name.includes(search);
                if (hideUnverified && passes) {
                  passes = org.verification > 0;
                }
                return passes;
              })
              .map((org) => <Org key={org.id} {...org} minified={true} />)
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
