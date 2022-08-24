const Airtable = require("airtable");

Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY });
const base = Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY);

const table = base("coffeeStores");

const getMinifiedRecords = (data) => {
  return data.map((record) => {
    return {
      recordId: record.id,
      ...record.fields,
    };
  });
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

const findRecordByFilter = async (id) => {
  const findCoffeeStoreRecords = await table
    .select({
      filterByFormula: `id='${id}'`,
    })
    .firstPage();

  return getMinifiedRecords(findCoffeeStoreRecords);
};
export { table, getMinifiedRecords, createStore, findRecordByFilter };
