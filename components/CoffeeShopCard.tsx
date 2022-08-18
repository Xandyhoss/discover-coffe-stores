/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type PropsType = {
    shop: {
      id: number;
      name: string;
      imgUrl: string;
      websiteUrl: string;
      address: string;
      neighbourhood: string;
    };
};
export default function CoffeeShopCard({ shop }: PropsType) {
  return (
    <Link href={`/coffee-store/${shop.id}`}>
      <div className="flex flex-col h-[150px] bg-gray-300 rounded-lg hover:scale-[1.02] hover:bg-opacity-95 transition-all justify-center items-end p-5 cursor-pointer relative overflow-hidden shadow-lg">
        <p className="z-[1] text-xl text-black text-right font-bold font-roboto">
          {shop.name}
        </p>
        <p className="z-[1] text-[1rem] text-blue-800 text-right font-roboto mt-[-5px]">
          {shop.address}
        </p>

        <img
          src={shop.imgUrl}
          alt=""
          className="absolute z-[0] opacity-70 w-[80%] left-0 masked-img"
        />
      </div>
    </Link>
  );
}
