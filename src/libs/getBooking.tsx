export default async function getBookingById(token: string, bid: string) {
  const response = await fetch(`http://localhost:5000/api/v1/bookings/${bid}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Cannot get booking by ID");
  }

  return await response.json();
}
