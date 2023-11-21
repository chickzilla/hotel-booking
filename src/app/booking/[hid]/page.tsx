import { authOption } from "@/app/api/auth/[...nextauth]/route";
import DateReserve from "@/components/DateReserve";
import getHotelById from "@/libs/getHotel";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";

export default async function BookingPage({
  params,
}: {
  params: { hid: string };
}) {
  const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  const hotel = await getHotelById(params.hid);
  return (
    <main className="w-[100%] flex flex-col items-center space-y-8 mt-9">
      <div className="text-2xl font-medium my-8">
        New Booking {hotel.data.name}
      </div>
      <DateReserve
        id={params.hid}
        token={session.user.token}
        typeofAction="create"
      />
    </main>
  );
}
