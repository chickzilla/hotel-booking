import getHotelById from "@/libs/getHotel";

export default async function DetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hotel = await getHotelById(params.hid);
  console.log(hotel.data.name);
  return <div>Test</div>;
}
