import BlockBooking from "./BlockBooking";

export default function BookingListBlock({
  bookingJson,
}: {
  bookingJson: Object;
}) {
  return <BlockBooking bookingJson={bookingJson} />;
}
