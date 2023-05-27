import { NextApiHandler } from "next";

const handleHealth: NextApiHandler = async (req, res) => {
  res.status(200).send({
    ok: true,
  });
};

export default handleHealth;
