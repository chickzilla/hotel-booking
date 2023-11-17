export default async function updateBooking(
  token: string,
  bid: string,
  bookingDate: string,
  checkoutDate: string
) {
  const response = await fetch(
    `http://localhost:65535/api/v1/bookings/${bid}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bookingDate: bookingDate,
        checkoutDate: checkoutDate,
        createAt: Date.now(),
      }),
    }
  );
  if (!response.ok) throw new Error("Failed to fetch update booking");

  return response;
}
