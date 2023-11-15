import { METHODS } from "http";

export default async function updateHotel(
  hid: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string
) {
  const response = await fetch(`http://localhost:5000/api/v1/hotels/${hid}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      address: address,
      district: district,
      province: province,
      postalcode: postalcode,
      tel: tel,
      picture: picture,
    }),
  });
  if (!response.ok) throw new Error("Failed to fetch update hotel");

  return response;
}
