import {
  findRecordByFilter,
  getMinifiedRecords,
  table,
} from "../../lib/airtable";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id } = req.body;
    try {
      if (id) {
        const records = await findRecordByFilter(id);
        if (records.length !== 0) {
          const record = records[0];
          const calculateVotes = parseInt(record.votes) + 1;
          const update = await table.update([
            {
              id: record.recordId,
              fields: {
                votes: calculateVotes,
              },
            },
          ]);

          if (update) {
            const minifiedRecord = getMinifiedRecords(update);
            res.status(200).json(minifiedRecord);
          } else {
            res.status(500).json({ message: "Something went wrong" });
          }
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
}
