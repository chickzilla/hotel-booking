import BookingListBlock from "@/components/BookingListBlock";
import getAllBookings from "@/libs/getAllBookings";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { BookingJson } from "@/interface";

export default async function BookingList() {
  const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;
  const booking: BookingJson = await getAllBookings(session.user.token);
  return (
    <div className="flex flex-col items-center">
      <BookingListBlock bookingJson={booking} />
    </div>
  );
}
