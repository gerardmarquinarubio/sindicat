import { Org } from "@prisma/client";
import { useSession } from "next-auth/react";

import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { AiFillCloseCircle, AiFillEye, AiFillPlusCircle } from "react-icons/ai";
import { trpc } from "~/utils/trpc";

export type RequiredOrgProps = Org;

export type ExtraOrgProps =
  | {
      minified?: false;
    }
  | {
      minified: true;
    };

export type OrgProps = RequiredOrgProps & ExtraOrgProps;

export default function Organization({
  minified,
  name,
  content,
  media,
  id,
}: OrgProps) {
  const session = useSession();
  const router = useRouter();

  const { deleteOrg } = trpc.useContext();

  const goToOrg = useCallback(() => router.push(`/org/${id}`), [router, id]);

  const handleDelete = () => {
    deleteOrg.fetch({ id }).then(console.log).catch(console.error);
  };

  if (minified) {
    return (
      <div
        className="relative h-40 w-full bg-gradient-to-t from-slate-900 to-transparent rounded flex items-end justify-between p-2 gap-2 cursor-pointer"
        onClick={goToOrg}
      >
        <div className="block min-w-0">
          <h4 className="text-xl font-bold overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </h4>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {content}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <button
            className="btn btn-sm btn-outline btn-circle btn-info"
            onClick={goToOrg}
          >
            <AiFillEye />
          </button>
          <button
            className="btn btn-sm btn-outline btn-circle btn-error"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            disabled={
              !session.data?.user ||
              !session.data?.user?.orgs.find(
                (o) => o.role === "Admin" && o.orgId === id
              )
            }
          >
            <AiFillCloseCircle />
          </button>
        </div>
        <Image
          alt={`${name} cover image`}
          src={media ?? "/images/placeholder.png"}
          className="absolute -z-10 rounded"
          fill
        />
      </div>
    );
  } else {
    return <></>;
  }
}
