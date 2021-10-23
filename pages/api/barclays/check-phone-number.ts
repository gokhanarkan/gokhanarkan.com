import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "../../../lib/redis";

const sanitizeNumber = (num: string) => {
  if (num.startsWith("+")) num = num.substring(3);
  num = num.replace(/[^0-9]/g, "");
  if (!Boolean(num)) return false;
  return num;
};

const checkNumber = async (num: string) => {
  try {
    const data = await redis.get(num);
    return Boolean(data);
  } catch (err) {
    return false;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const number = req.query.number as string;
  if (!number)
    return res.status(422).json({ error: "Number field is missing." });
  const sanitized = sanitizeNumber(number);
  if (!sanitized)
    return res.status(422).json({ error: "Number is not applicable." });
  const found = await checkNumber(sanitized);
  res.status(200);
  res.json({
    found,
  });
}
