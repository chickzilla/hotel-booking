export default async function getHotelById(hid: string) {
  const response = await fetch(`http://localhost:5000/api/v1/hotels/${hid}`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("fail to fetch hotel by id");
  }
  return await response.json();
}
