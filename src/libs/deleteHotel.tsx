export default async function deleteHotel(token: string, hid: string) {
  const response = await fetch(`http://localhost:5000/api/v1/hotels/${hid}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) throw new Error("Failed to fetch delete hotel");

  return response;
}
