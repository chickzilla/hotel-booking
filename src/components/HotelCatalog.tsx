import Card from "./Card";

export default function HotelCatalog() {
  return (
    <div
      className="flex flex-row flex-wrap
    w-[80%] mx-auto"
    >
      <div className="w-1/3">
        <Card hotelName="Art Hotel" hotelSrc="/img/hotel1.jpg" hotelRent="55" />
      </div>
      <div className="w-1/3">
        <Card hotelName="Art Hotel" hotelSrc="/img/hotel1.jpg" hotelRent="55" />
      </div>
      <div className="w-1/3">
        <Card hotelName="Art Hotel" hotelSrc="/img/hotel1.jpg" hotelRent="55" />
      </div>
      <div className="w-1/3">
        <Card hotelName="Art Hotel" hotelSrc="/img/hotel1.jpg" hotelRent="55" />
      </div>
    </div>
  );
}
