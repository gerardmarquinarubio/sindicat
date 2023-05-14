import { type Post, PostType } from "@prisma/client";
import { useRef, useState } from "react";
import { Uploader } from "./Uploader";
import { trpc } from "~/utils/trpc";
import { DatesToStrings } from "~/utils/DateToString";

interface PostModalProps {
  org: number;
  key?: string;
  openButtonText?: string;
  openButtonClassname?: string;
  onPost?: (post: DatesToStrings<Post>) => void;
}

const DEFAULT_POST_TYPE: PostType = "Text";

interface IErrors {
  text?: string;
  link?: string;
  image?: string;
}

export default function PostModal({
  org,
  key = "post-modal",
  openButtonClassname = "btn btn-sm btn-primary",
  openButtonText = "Create post",
  onPost = () => {},
}: PostModalProps) {
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
      <label htmlFor={key} className={openButtonClassname}>
        {openButtonText}
      </label>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={key}
        className="modal-toggle"
        checked={modalOpen}
        onChange={(e) => setModalOpen((prev) => !prev)}
      />
      <label htmlFor={key} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
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
                <span className="label-text">Post type</span>
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
                  <span className="label-text">Title</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="A cool title"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            {postType === "Text" && (
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your text</span>
                  </label>
                  <textarea
                    name="text"
                    className="textarea textarea-bordered h-24"
                    placeholder="Bio"
                  ></textarea>
                </div>
              </div>
            )}
            {postType === "Image" && (
              <div>
                <Uploader label="Image" onUpload={setImageUrl} />
              </div>
            )}
            {postType === "Link" && (
              <div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Link</span>
                  </label>
                  <input
                    name="link"
                    type="url"
                    placeholder="https://coolink.com/"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>
            )}
            <button type="submit" className="btn btn-primary mt-6">
              Submit
            </button>
          </form>
        </label>
      </label>
    </>
  );
}