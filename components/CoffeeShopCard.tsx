/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect } from "react";

type PropsType = {
  shop: {
    fsq_id: string;
    name: string;
    link: string;
    location: {
      address: string;
      formatted_address: string;
      postcode: string;
    };
  };
};

export default function CoffeeShopCard({ shop }: PropsType) {
  const getImage = async () => {
    const response = await fetch(
      `http://localhost:3000/api/getImage/${shop.fsq_id}`
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getImage();
  });

  return (
    <Link href={`/coffee-store/${shop.fsq_id}`}>
      <div className="flex flex-col h-[150px] bg-gray-300 rounded-lg hover:scale-[1.02] hover:bg-opacity-95 transition-all justify-center items-end p-5 cursor-pointer relative overflow-hidden shadow-lg">
        <p className="z-[1] text-xl text-black text-right font-bold font-roboto">
          {shop.name}
        </p>
        <p className="z-[1] leading-5 text-[1rem] text-blue-800 text-right font-roboto mt-[-5px]">
          {shop.location.address}
        </p>

        {
          <img
            src="/img/background.jpg"
            alt=""
            className="absolute z-[0] opacity-70 h-full w-[80%] left-0 masked-img"
          />
        }
      </div>
    </Link>
  );
}
