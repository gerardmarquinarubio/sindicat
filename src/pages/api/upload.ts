import { NextApiHandler } from "next";
import { getSessionUser } from "~/utils/session";

const handleUpload: NextApiHandler = async (req, res) => {
  const user = await getSessionUser(req, res);
  if (user) {
    const { file } = req.body;
    if (!file) {
      res.status(400).send({ error: "no file present to upload" });
    } else {
      const baseUrl = "https://api.imgbb.com/1/upload";
      if (!process.env.IMGBB_SECRET) throw new Error("No IMAGEBB secret");
      const apiKey = process.env.IMGBB_SECRET;
      const finalUrl = new URL(baseUrl);
      finalUrl.searchParams.append("key", apiKey);
      const body = new URLSearchParams({
        image: file,
      });
      const data = await fetch(finalUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });
      const text = await data.text();
      const json = JSON.parse(text) as any;
      if (json.error) throw new Error(json.error.message);
      res.status(200).send({
        url: json.data.url,
      });
    }
  } else {
    res.status(401).send({
      error: "unauthorized",
    });
  }
};

export default handleUpload;
