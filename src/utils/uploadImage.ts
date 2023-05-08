export async function uploadImage(file: File): Promise<string> {
    const encodedFile = await fileToBase64(file);
    const data = await fetch("/api/upload", {
    method: "POST",
    body: JSON.stringify({ file: encodedFile }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = (await data.json()) as any;
  return json.url as string;
}

export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const image = reader.result?.toString();
      if (!image) {
        reject();
      } else {
        resolve(
          image.replace("data:", "").replace(/^.+,/, "") // https://pqina.nl/blog/convert-a-file-to-a-base64-string-with-javascript/
        );
      }
    };
    reader.onerror = () => {
      reject();
    };
  });
}
