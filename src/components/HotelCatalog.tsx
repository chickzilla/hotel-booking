import Card from "./Card";

export default async function HotelCatalog({
  HotelJson,
}: {
  HotelJson: Object;
}) {
  const HotelReady = await HotelJson;
  return (
    <div
      className="flex flex-row flex-wrap
    w-[90%] mx-auto"
    >
      {HotelReady.data.map((hotelItem: Object) => (
        <div className="w-1/3" key={hotelItem.id}>
          <Card
            hotelName={hotelItem.name}
            hotelSrc={hotelItem.picture}
            hotelRent={hotelItem.tel}
          />
        </div>
      ))}
    </div>
  );
}
