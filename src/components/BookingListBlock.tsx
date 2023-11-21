import { BookingJson } from "@/interface";
import BlockBooking from "./BlockBooking";

export default async function BookingListBlock({
  bookingJson,
}: {
  bookingJson: BookingJson;
}) {
  const booking = await bookingJson;
  return <BlockBooking bookingJson={booking} />;
}
