import { AiFillFileAdd } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { uploadImage } from "~/utils/uploadImage";
import Image from "next/image";

interface UploaderProps {
  label: string;
  onUpload: (url: string) => void;
}

export function Uploader({ label, onUpload }: UploaderProps) {
  const [imageLink, setImageLink] = useState("");

  const handleUpload = useCallback(
    (files: FileList | null) => {
      if (files)
        (async () => {
          const [fileToUpload] = Array.from(files);
          const url = await uploadImage(fileToUpload);
          onUpload(url);
          return url;
        })()
          .then(setImageLink)
          .catch(console.error);
    },
    [onUpload]
  );

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      handleUpload(acceptedFiles);
    },
    [handleUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="form-control">
      {!imageLink ? (
        <>
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
          <div
            {...getRootProps()}
            className="textarea textarea-bordered hover:textarea-success"
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center">
              Drop files here or click to choose
              <AiFillFileAdd size={24} />
            </div>
          </div>
        </>
      ) : (
        <div className="relative w-full h-32 flex justify-center items-center rounded-lg overflow-hidden">
          <Image alt="uploaded-image" src={imageLink} fill />
          <div className="bg-opacity-80 bg-slate-900 w-full h-full z-10 flex justify-center items-center">
            <p className="text-center">Picture uploaded successfully</p>
          </div>
        </div>
      )}
    </div>
  );
}
