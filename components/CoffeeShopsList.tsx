import CoffeeShopCard from "./CoffeeShopCard";

export default function CoffeeShopsList() {
  const shopNames = [
    "Nortsip Cafe",
    "Fresh Coffee Stop",
    "Ground Up Cafe",
    "Cakes and Expresso",
    "Nortsip Cafe",
    "Fresh Coffee Stop",
    "Ground Up Cafe",
    "Cakes and Expresso",
    "Ground Up Cafe",
    "Ground Up Cafe",
    "Nortsip Cafe",
    "Fresh Coffee Stop",
    "Ground Up Cafe",
  ];
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {shopNames.map((shop, index) => {
        return <CoffeeShopCard name={shop} key={index} />;
      })}
    </div>
  );
}
