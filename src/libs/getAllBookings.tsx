export default async function getAllBookings(token: string) {
  const response = await fetch("http://localhost:5000/api/v1/bookings", {
    method: "GET",
    cache: "no-store",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Cannot fetch get all bookings");
  }

  return await response.json();
}
