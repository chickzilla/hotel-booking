import BookingListBlock from "@/components/BookingListBlock";
import getAllBookings from "@/libs/getAllBookings";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function BookingList() {
  const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;
  //console.log(session.user.token);
  const profile = await getUserProfile(session.user.token);
  const booking = getAllBookings(session.user.token);
  return (
    <div>
      <BookingListBlock bookingJson={booking} profileJson={profile} />
    </div>
  );
}
