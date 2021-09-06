import Redis from "ioredis";
import { numbers } from "../data/barclays_numbers.js";

export const redis = new Redis(process.env.REDIS_URL);

export const setNumbers = () => {
  numbers.forEach((number) => {
    redis.set(number, "barclays");
  });
};
