import { fetchCoffeeStoreImage } from "../../../lib/coffeeStores";

export default async function handler(req, res) {
  const { id } = req.query;
  const photo = await fetchCoffeeStoreImage(id);
  res.status(200).send(photo);
}
