import { table, getMinifiedRecords, createStore } from "../../lib/airtable";

export default async function createCoffeeStore(req, res) {
  if (req.method === "POST") {
    const { id, name, address, cep, imgUrl } = req.body;
    try {
      if (id) {
        const findCoffeeStoreRecords = await table
          .select({
            filterByFormula: `id=${id}`,
          })
          .firstPage();

        if (findCoffeeStoreRecords.length !== 0) {
          const records = getMinifiedRecords(findCoffeeStoreRecords);
          res.json(records);
        } else {
          if (name) {
            const createdRecords = await createStore(id, name, address, cep, imgUrl);
            const records = getMinifiedRecords(createdRecords);
            res.json(records);
          } else {
            res.status(422).json({ message: "Missing name" });
          }
        }
      } else {
        res.status(422).json({ message: "Missing ID" });
      }
    } catch (error) {
      console.log("Error creating or finding a store", error);
      res.json({ message: "Error creating or finding a store", error });
    }
  }
}
