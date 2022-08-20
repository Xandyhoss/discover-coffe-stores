// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest } from "next";
import { fetchCoffeeStores } from "../../lib/coffeeStores";

export default async function handler(req: NextApiRequest, res) {
  if (req.method === "POST") {
    const latLong = req.body.latLong;
    const nearbyShops = await fetchCoffeeStores(latLong);
    res.status(200).json(nearbyShops);
  }
}
