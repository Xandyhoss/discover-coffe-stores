// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { fetchCoffeeStores } from "../../lib/coffeeStores";
import { coffeeShop } from "../../utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<coffeeShop[]>
) {
  if (req.method === "POST") {
    const { latLong, limit } = req.body;
    const nearbyShops = await fetchCoffeeStores(latLong, limit);
    res.status(200).json(nearbyShops);
  }
}
