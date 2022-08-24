import {
  findRecordByFilter,
} from "../../lib/airtable";

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    if (id) {
      const records = await findRecordByFilter(id);
      if (records.length !== 0) {
        res.json(records);
      } else {
        res.status(404).json({ message: "Id not found" });
      }
    } else {
      res.status(400).json({ message: "Missing id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
}
