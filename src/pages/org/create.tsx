import Image from "next/image";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getDictionary } from "~/dictionaries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { trpc } from "~/utils/trpc";
import { Uploader } from "~/components/Uploader";

interface IErrors {
  name?: string;
  description?: string;
}

export default function Access({
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [errors, setErrors] = useState<IErrors>({});
  const [orgLogo, setOrgLogo] = useState("");
  const { create } = trpc.useContext();
  function extractValuesFromTarget(target: any) {
    return {
      name: target.elements?.name?.value,
      description: target.elements?.description?.value,
    };
  }
  function handleCreate(name: string, description: string) {
    if (!name || !description) {
      return;
    }
    create
      .fetch({
        name,
        description,
      })
      .then(console.log)
      .catch(console.error);
  }
  return (
    <div>
      <div className="relative hero min-h-screen bg-slate-900 lg:bg-transparent lg:bg-gradient-to-l from-slate-900 to-transparent">
        <Image
          alt="access background picture"
          src="https://picsum.photos/2000/1000"
          className="-z-10"
          fill
        />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">{locale.create.title}</h1>
            <p className="py-6">{locale.create.subtitle}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              className="card-body"
              onSubmit={(e) => {
                e.preventDefault();
                const { name, description } = extractValuesFromTarget(e.target);
                if (!name) {
                  setErrors((prev) => ({ ...prev, name: "cannot be empty" }));
                }
                if (!description) {
                  setErrors((prev) => ({
                    ...prev,
                    description: "cannot be empty",
                  }));
                }
                handleCreate(name, description);
              }}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">{locale.create.name.label}</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={locale.create.name.placeholder}
                  className={
                    errors.name ? "input input-error" : "input input-bordered"
                  }
                  onChange={() => setErrors((prev) => ({ ...prev, name: "" }))}
                />
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.name}
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    {locale.create.description.label}
                  </span>
                </label>
                <textarea
                  name="description"
                  placeholder={locale.create.description.placeholder}
                  className={
                    errors.description
                      ? "input textarea-error"
                      : "textarea textarea-bordered"
                  }
                  onChange={() =>
                    setErrors((prev) => ({ ...prev, description: "" }))
                  }
                />
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.description}
                  </span>
                </label>
              </div>
              <Uploader onUpload={setOrgLogo} label="Logo"/>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  {locale.create.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      locale: getDictionary(locale),
    },
  };
};
