import { NextApiHandler } from "next";
import { getSessionUser } from "~/utils/session";

const handleUpload: NextApiHandler = async (req, res) => {
  const user = await getSessionUser(req, res);
  if (!user) {
    res.status(401).send({
      error: "unauthorized",
    });
    return;
  }
  const { file } = req.body;
  if (!file) {
    res.status(400).send({
      error: "no file to upload",
    });
    return;
  }

  const baseUrl = "https://api.imgbb.com/1/upload";
  if (!process.env.IMGBB_SECRET) {
    res.status(500).send({
      error: "someone forgot to set the .env",
    });
    return;
  }
  const apiKey = process.env.IMGBB_SECRET;
  const finalUrl = new URL(baseUrl);
  finalUrl.searchParams.append("key", apiKey);
  const data = await fetch(finalUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      image: file,
    }),
  });
  const json = await data.json() as any;
  if (json.error) {
    res.status(400).send({ error: json.error });
    return;
  }
  res.status(200).send({
    url: json.data.url,
  });
};

export default handleUpload;
