import { type Post, PostType } from "@prisma/client";
import { useRef, useState } from "react";
import { Uploader } from "./Uploader";
import { trpc } from "~/utils/trpc";
import { useSession } from "next-auth/react";
import { Schema } from "~/dictionaries/schema";

interface PostModalProps {
  org: number;
  key?: string;
  locale: Schema;
  openButtonClassname?: string;
  onPost?: (post: Post) => void;
}

const DEFAULT_POST_TYPE: PostType = "Text";

interface IErrors {
  text?: string;
  link?: string;
  image?: string;
}

export default function PostModal({
  org,
  locale,
  key = "post-modal",
  openButtonClassname = "btn btn-sm btn-primary",
  onPost = () => {},
}: PostModalProps) {
  const session = useSession();
  const { createPost } = trpc.useContext();
  const [postType, setPostType] = useState(DEFAULT_POST_TYPE);
  const [imageUrl, setImageUrl] = useState("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<IErrors>({});

  function extractValuesFromTarget(target: any) {
    return {
      name: target.elements?.name?.value ?? "",
      link: target.elements?.link?.value ?? "",
      text: target.elements?.text?.value ?? "",
    };
  }

  function handleCreate(name: string, text: string, link: string) {
    createPost
      .fetch({
        name,
        type: postType,
        content: postType === "Text" ? text : link,
        media: imageUrl,
        org,
      })
      .then((uploaded) => {
        setModalOpen(false);
        onPost(uploaded);
      })
      .catch(console.error);
  }

  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor={key}
        className={
          openButtonClassname + (session.data?.user ? "" : " btn-disabled")
        }
      >
        {locale.components.postModal.openButtonDefault}
      </label>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={key}
        className="modal-toggle"
        checked={modalOpen}
        onChange={() => setModalOpen((prev) => !prev)}
        disabled={!session.data?.user}
      />
      <label htmlFor={key} className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">Create new post</h3>
          <form
            className="form-control w-full"
            onSubmit={(e) => {
              e.preventDefault();
              const { name, text, link } = extractValuesFromTarget(e.target);
              if (!name) {
                setErrors((prev) => ({ ...prev, name: "cannot be empty " }));
              }
              if (!text) {
                setErrors((prev) => ({ ...prev, text: "cannot be empty " }));
              }
              if (!link) {
                setErrors((prev) => ({ ...prev, link: "cannot be empty " }));
              }
              if (!imageUrl) {
                setErrors((prev) => ({ ...prev, image: "cannot be empty " }));
              }
              handleCreate(name, text, link);
            }}
          >
            <div>
              <label className="label">
                <span className="label-text">
                  {locale.components.postModal.postType}
                </span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                defaultValue={DEFAULT_POST_TYPE}
                onChange={(e) => setPostType(e.currentTarget.value as PostType)}
              >
                {Object.keys(PostType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    {locale.components.postModal.title.label}
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={locale.components.postModal.title.placeholder}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            {postType === "Text" && (
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      {locale.components.postModal.text.label}
                    </span>
                  </label>
                  <textarea
                    name="text"
                    className="textarea textarea-bordered h-24"
                    placeholder={locale.components.postModal.text.placeholder}
                  ></textarea>
                </div>
              </div>
            )}
            {postType === "Image" && (
              <div>
                <Uploader
                  label={locale.components.postModal.image.label}
                  onUpload={setImageUrl}
                />
              </div>
            )}
            {postType === "Link" && (
              <div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">
                      {locale.components.postModal.link.label}
                    </span>
                  </label>
                  <input
                    name="link"
                    type="url"
                    placeholder={locale.components.postModal.link.placeholder}
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary mt-6">
              {locale.components.postModal.submit.label}
            </button>
          </form>
        </label>
      </label>
    </>
  );
}
