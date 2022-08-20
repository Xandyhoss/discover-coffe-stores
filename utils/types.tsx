type coffeeShop = {
  fsq_id: string;
  name: string;
  location: {
    address: string;
    formatted_address: string;
    postcode: string;
  };
  imgUrl: string;
};

export type { coffeeShop };
