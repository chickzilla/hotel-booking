export default async function createBooking(hid: string, bookingData: any) {
  const response = await fetch("http://localhost:65535/api/v1/auth/me", {
    method: "POST",
    headers: {
      authorization: `Bearer ${hid}`,
    },
    body: JSON.stringify(bookingData),
  });
  if (!response.ok) {
    throw new Error("Cannot create booking");
  }

  return await response.json();
}
