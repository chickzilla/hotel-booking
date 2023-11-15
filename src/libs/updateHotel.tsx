export default async function updateHotel(
  token: string,
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
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
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
