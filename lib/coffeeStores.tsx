import { coffeeShop } from "../utils/types";

export const fetchCoffeeStores = async (
  latLong: string = "-17.542411,-39.739676",
  limit: number = 8
): Promise<coffeeShop[]> => {
  const response = await fetch(
    `https://api.foursquare.com/v3/places/search?ll=${latLong}&query=cafe&limit=${limit}&sort=DISTANCE`,
    {
      headers: {
        Authorization: process.env.API_TOKEN,
      },
    }
  );
  const { results } = await response.json();

  const resultsWithImagesPromises = results.map(async (result: coffeeShop) => {
    result.imgUrl = await fetchCoffeeStoreImage(result.fsq_id);
    return result;
  });

  const resultsWithImages = (await Promise.all(
    resultsWithImagesPromises
  )) as coffeeShop[];

  return resultsWithImages;
};

export const fetchCoffeeStoreById = async (id: string): Promise<coffeeShop> => {
  const response = await fetch(`https://api.foursquare.com/v3/places/${id}`, {
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  });
  const result = (await response.json()) as coffeeShop;

  result.imgUrl = await fetchCoffeeStoreImage(result.fsq_id);

  return result;
};

export const fetchCoffeeStoreImage = async (id: string): Promise<string> => {
  const response = await fetch(
    `https://api.foursquare.com/v3/places/${id}/photos?limit=1`,
    {
      headers: {
        Authorization: process.env.API_TOKEN,
        Accept: "application / json",
      },
    }
  );
  if (response.status !== 200) {
    return "/img/background.jpg";
  } else {
    const data = await response.json();
    if (data.length > 0) {
      return `${data[0].prefix}300x300${data[0].suffix}`;
    } else {
      return "/img/background.jpg";
    }
  }
};
