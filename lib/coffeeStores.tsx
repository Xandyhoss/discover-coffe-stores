export const fetchCoffeeStores = async () => {
  const response = await fetch(
    "https://api.foursquare.com/v3/places/search?near=Teixeira%20de%20Freitas%2C%20BA&query=cafe&limit=8",
    {
      headers: {
        Authorization: process.env.API_TOKEN,
      },
    }
  );
  const data = await response.json();
  return data.results;
};

export const fetchCoffeeStoreImage = async (id) => {
  const response = await fetch(
    `https://api.foursquare.com/v3/places/${id}/photos?limit=1`,
    {
      headers: {
        Authorization: process.env.API_TOKEN,
      },
    }
  );
  const data = await response.json();
  return data;
};
