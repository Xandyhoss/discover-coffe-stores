const Airtable = require("airtable");

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
const base = Airtable.base(process.env.AIRTABLE_BASE_KEY);

const table = base("coffeeStores");

const getMinifiedRecords = (data) => {
  return data.map((record) => record.fields);
};

const createStore = async (id, name, address, cep, imgUrl) => {
  const data = await table.create([
    {
      fields: {
        id,
        name,
        address,
        cep,
        votes: 0,
        imgUrl,
      },
    },
  ]);
  return data;
};

export { table, getMinifiedRecords, createStore };
