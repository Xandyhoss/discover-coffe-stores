import { coffeeShop } from "../utils/types";
import CoffeeShopCard from "./CoffeeShopCard";
type PropsType = {
  coffeeShops: coffeeShop[];
  nearby: boolean;
};
export default function CoffeeShopsList(props: PropsType) {
  return (
    <div className="animate-enter">
      {props.coffeeShops.length > 0 ? (
        <div className="w-full mb-2">
          <h2 className="text-3xl font-bold font-roboto">
            {props.nearby
              ? "Coffee shops nearby you"
              : "Coffee shops in Teixeira de Freitas"}
          </h2>
        </div>
      ) : null}

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {props.coffeeShops.map((shop) => {
          return <CoffeeShopCard shop={shop} key={shop.fsq_id} />;
        })}
      </div>
    </div>
  );
}
