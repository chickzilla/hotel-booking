import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card({
  hotelName,
  hotelSrc,
  hotelRent,
}: {
  hotelName: string;
  hotelSrc: string;
  hotelRent: string;
}) {
  return (
    <InteractiveCard>
      <div className="w-full h-3/4 relative rounded-t-2xl overflow-hidden">
        <Image
          src={hotelSrc}
          alt="card"
          fill={true}
          priority
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="p-[20px] text-black text-start text-xl font-semibold font-sans">
        <div>{hotelName}</div>
        <div className="text-sm font-medium mt-1 text-slate-700">
          Tel: {hotelRent}
        </div>
      </div>
    </InteractiveCard>
  );
}
