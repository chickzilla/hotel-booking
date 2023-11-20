export default async function deleteBooking(token: string, bid: string) {
  const response = await fetch(
    `http://localhost:65535/api/v1/bookings/${bid}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) throw new Error("Failed to fetch delete booking");

  return response;
}
