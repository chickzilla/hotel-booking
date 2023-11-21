import { authOption } from "@/app/api/auth/[...nextauth]/route";
import DateReserve from "@/components/DateReserve";
import { getServerSession } from "next-auth";

export default async function BookingPage({
  params,
}: {
  params: { bid: string };
}) {
  const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;
  return (
    <main className="w-[100%] flex flex-col items-center space-y-8 mt-9">
      <div className="text-2xl font-medium my-8">Update Booking</div>
      <DateReserve
        id={params.bid}
        token={session.user.token}
        typeofAction="update"
      />
    </main>
  );
}
