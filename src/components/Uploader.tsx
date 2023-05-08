/* 
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "~/server/routers/uploadthing"; 
*/
import { AiFillFileAdd } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { uploadImage } from "~/utils/uploadImage";

// const { uploadFiles } = generateReactHelpers<OurFileRouter>();

interface UploaderProps {
  onUpload: (url: string) => void;
}

export function Uploader({ onUpload }: UploaderProps) {
  const onDrop = useCallback((acceptedFiles: any) => {
    handleUpload(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function handleUpload(files: FileList | null) {
    if (files)
      (async () => {
        const [fileToUpload] = Array.from(files);
        const reader = new FileReader();
        reader.readAsDataURL(fileToUpload);
        reader.onload = () => {
          let image = reader.result?.toString();
          if (!image) throw new Error("error stringifying file");
          image = image.replace("data:", "").replace(/^.+,/, ""); // https://pqina.nl/blog/convert-a-file-to-a-base64-string-with-javascript/
          uploadImage(image)
            .then(() => console.info("uploaded picture!"))
            .catch(console.error);
        };
        reader.onerror = () => {
          throw new Error("error reading file");
        };
      })()
        .then(console.info)
        .catch(console.error);
  }

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Logo</span>
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
    </div>
  );
}
