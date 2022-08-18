import Link from "next/link";

type PropsType = {
  name: string | number;
};
export default function CoffeeShopCard({ name }: PropsType) {
  return (
    <Link href={`/coffee-store/${name}`}>
      <div className="h-[150px] bg-gray-300 rounded-lg hover:scale-[1.02] hover:bg-opacity-95 transition-all flex justify-center items-center text-xl text-black text-center p-5 cursor-pointer">
        {name}
      </div>
    </Link>
  );
}
