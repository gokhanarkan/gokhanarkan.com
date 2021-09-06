import { redis } from "../../../lib/redis";

const checkNumber = async (num: string) => {
  try {
    const data = await redis.get(num);
    return Boolean(data);
  } catch (err) {
    return false;
  }
};

const sanitizeNumber = (num: string) => {
  return num.replace(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g, "");
};

export default async function handler(req, res) {
  const number = req.query.number;
  if (!number)
    return res.status(422).json({ error: "Number field is missing." });
  const found = await checkNumber(number);
  res.status(200);
  res.json({
    found,
  });
}
