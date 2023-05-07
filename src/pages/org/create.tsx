import Image from "next/image";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getDictionary } from "~/dictionaries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { trpc } from "~/utils/trpc";

interface IErrors {
  name?: string;
  email?: string;
  password?: string;
  cookies?: boolean;
}

export default function Access({
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const method = (router.query.method as "login" | "register") ?? "login";
  const [errors, setErrors] = useState<IErrors>({});
  const { create } = trpc.useContext();
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) {
      router.push({
        pathname: "/access",
      });
    }
  }, [router, session]);
  function extractValuesFromTarget(target: any) {
    return {
      name: target.elements?.name?.value,
      email: target.elements?.email?.value,
      password: target.elements?.password?.value,
      cookies: target.elements?.cookies?.checked,
    };
  }
  function handleCreate() {
    create.fetch({
      name: "",
      description: "",
    }).then(console.log).catch(console.error);
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
            <h1 className="text-5xl font-bold">
              {locale.access[method].title}
            </h1>
            <p className="py-6">{locale.access[method].subtitle}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              className="card-body"
              onSubmit={(e) => {
                e.preventDefault();
                const { name, email, password, cookies } =
                  extractValuesFromTarget(e.target);
                if (!name) {
                  setErrors((prev) => ({ ...prev, name: "cannot be empty" }));
                }
                if (!email) {
                  setErrors((prev) => ({
                    ...prev,
                    email: "cannot be empty",
                  }));
                }
                if (!password) {
                  setErrors((prev) => ({
                    ...prev,
                    password: "cannot be empty",
                  }));
                }
                if (!cookies) {
                  setErrors((prev) => ({
                    ...prev,
                    cookies: true,
                  }));
                }
                handleCreate();
              }}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    {locale.access.email.label}
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={locale.access.email.placeholder}
                  className={
                    errors.email ? "input input-error" : "input input-bordered"
                  }
                  onChange={() => setErrors((prev) => ({ ...prev, email: "" }))}
                />
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.email}
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    {locale.access.password.label}
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder={locale.access.password.placeholder}
                  className={
                    errors.password
                      ? "input input-error"
                      : "input input-bordered"
                  }
                  onChange={() =>
                    setErrors((prev) => ({ ...prev, password: "" }))
                  }
                />
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.password}
                  </span>
                </label>
              </div>
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
