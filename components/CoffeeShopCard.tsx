/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { coffeeShop } from "../utils/types";

type PropsType = {
  shop: coffeeShop;
};

export default function CoffeeShopCard(props: PropsType) {
  return (
    <Link href={`/coffee-store/${props.shop.fsq_id}`}>
      <div className="flex flex-col h-[150px] bg-gray-300 rounded-lg hover:scale-[1.02] hover:bg-opacity-95 transition-all justify-center items-end p-5 cursor-pointer relative overflow-hidden shadow-lg">
        <p className="z-[1] text-xl text-black text-right font-bold font-roboto">
          {props.shop.name}
        </p>
        <p className="z-[1] leading-5 text-[1rem] text-blue-800 text-right font-roboto mt-[-5px]">
          {props.shop.location.address}
        </p>

        {
          <img
            src={props.shop.imgUrl}
            alt=""
            className="absolute z-[0] opacity-70 h-full w-auto left-0 masked-img"
          />
        }
      </div>
    </Link>
  );
}
