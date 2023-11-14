import Card from "./Card";
import Link from "next/link";

export default async function HotelCatalog({
  HotelJson,
}: {
  HotelJson: Object;
}) {
  const HotelReady = await HotelJson;
  return (
    <div
      className="flex flex-row flex-wrap
    w-[70%] mx-auto overflow-hidden"
    >
      {HotelReady.data.map((hotelItem: Object) => (
        <Link
          className="w-1/3 px-[10px] h-[50vh] py-[10px]"
          href={`/hotel/${hotelItem.id}`}
        >
          <Card
            hotelName={hotelItem.name}
            hotelSrc={hotelItem.picture}
            hotelRent={hotelItem.tel}
          />
        </Link>
      ))}
    </div>
  );
}
