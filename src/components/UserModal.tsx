import { User } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { Uploader } from "./Uploader";
import { trpc } from "~/utils/trpc";
import { useSession } from "next-auth/react";
import { Schema } from "~/dictionaries/schema";

interface UserModalProps {
  key?: string;
  openButtonText?: string;
  openButtonClassname?: string;
  locale: Schema;
  onUser?: (user: User) => void;
}

interface IErrors {
  name?: string;
  bio?: string;
  media?: string;
}

export default function UserModal({
  key = "user-modal",
  openButtonClassname = "text-sm italic z-50 m-4 link",
  openButtonText = "Click here to edit",
  onUser = () => {},
}: UserModalProps) {
  const session = useSession();
  const { updateUser } = trpc.useContext();
  const [imageUrl, setImageUrl] = useState("/images/placeholder.jpeg");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<IErrors>({});

  useEffect(() => {
    setImageUrl(session.data?.user?.media ?? "/images/placeholder.jpeg");
  }, [session]);

  function extractValuesFromTarget(target: any) {
    return {
      name: target.elements?.name?.value ?? "",
      bio: target.elements?.bio?.value ?? "",
    };
  }

  function handleUpdate(name: string, bio: string) {
    updateUser
      .fetch({ name, bio, media: imageUrl })
      .then(onUser)
      .catch(console.error);
  }

  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor={key}
        className={openButtonClassname}
        onClick={() => console.log("hi!")}
      >
        {openButtonText}
      </label>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={key}
        className="modal-toggle"
        checked={modalOpen}
        onChange={() => setModalOpen((prev) => !prev)}
      />
      <label htmlFor={key} className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">Create new User</h3>
          <form
            className="form-control w-full"
            onSubmit={(e) => {
              e.preventDefault();
              const { name, bio } = extractValuesFromTarget(e.target);
              if (!name) {
                setErrors((prev) => ({ ...prev, name: "cannot be empty " }));
              }
              if (!bio) {
                setErrors((prev) => ({ ...prev, text: "cannot be empty " }));
              }
              if (!imageUrl) {
                setErrors((prev) => ({ ...prev, image: "cannot be empty " }));
              }
              handleUpdate(name, bio);
            }}
          >
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={session.data?.user?.name ?? ""}
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bio</span>
                </label>
                <textarea
                  name="bio"
                  className="textarea textarea-bordered h-24"
                  defaultValue={session.data?.user?.content ?? ""}
                ></textarea>
              </div>
            </div>
            <Uploader label="New profile picture" onUpload={setImageUrl} />
            <button type="submit" className="btn btn-primary mt-6">
              Submit
            </button>
          </form>
        </label>
      </label>
    </>
  );
}
