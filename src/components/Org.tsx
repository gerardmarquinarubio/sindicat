import {
  Org
} from '@prisma/client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiFillEye, AiFillPlusCircle, AiFillCloseCircle } from "react-icons/ai";
import { useCallback } from 'react';

export type RequiredOrgProps = Org;

export type ExtraOrgProps =
  | {
      minified?: false;
    }
  | {
      minified: true;
    };

export type OrgProps = RequiredOrgProps & ExtraOrgProps;

export default function Organization({ minified, name, content, media, id } : OrgProps) {
  const router = useRouter();

  const goToOrg = useCallback(() => router.push(`/org/4321`), [router]);

  if (minified) {
    return (
      <div className="relative h-40 w-full bg-gradient-to-t from-slate-900 to-transparent rounded flex items-end justify-between p-2 gap-2 cursor-pointer" onClick={goToOrg}>
        <div className="block min-w-0">
          <h4 className="text-xl font-bold overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </h4>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {content}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <button className="btn btn-sm btn-outline btn-circle btn-info" onClick={goToOrg}>
            <AiFillEye />
          </button>
          <button className="btn btn-sm btn-outline btn-circle btn-success">
            <AiFillPlusCircle />
          </button>
          <button className="btn btn-sm btn-outline btn-circle btn-error">
            <AiFillCloseCircle />
          </button>
        </div>
        <Image
          alt={`${name} cover image`}
          src={media}
          fill
          className="absolute -z-10 rounded"
        />
      </div>
    );
  } else {
    return <></>;
  }
}