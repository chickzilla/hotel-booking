export default async function createBooking(
  hid: string,
  token: string,
  bookingDate: string,
  checkoutDate: string
) {
  const response = await fetch(
    `http://localhost:65535/api/v1/hotels/${hid}/bookings`,
    {
      method: "POST",
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
  if (response.ok) {
    return response;
  } else {
    throw new Error("Cannot create booking");
  }
}
