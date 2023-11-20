import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import deleteBooking from "@/libs/deleteBooking";
import { useRouter } from "next/navigation";
import ManageBooking from "./ManageBookingButton";

export default async function BlockBooking({
  bookingJson,
}: {
  bookingJson: Object;
}) {
  const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;
  const bookingReady = await bookingJson;
  const profile = await getUserProfile(session.user.token);

  const isAdmin = () => profile.data.role === "admin";

  return isAdmin() ? (
    <main>
      {bookingReady.data.map((bookingItem: Object) => (
        <div className="bg-slate-200 rounded-md px-8 mx-5 py-2 my-2 font-sans w-[75vw] flex flex-row justify-between items-center">
          <div>
            <div className="text-xl text-black font-bold">
              {bookingItem.hotel.name}
            </div>
            <div className="text-sm text-black">
              Username: {bookingItem.user.name}
            </div>
            <div className="text-md text-black">
              Booking Date: {bookingItem.bookingDate.substring(0, 10)}
            </div>
            <div className="text-md text-black">
              Check-Out Date: {bookingItem.checkoutDate.substring(0, 10)}
            </div>
          </div>
          <div className="space-x-4">
            <ManageBooking token={session.user.token} bid={bookingItem._id} />
          </div>
        </div>
      ))}
    </main>
  ) : (
    <main>
      {bookingReady.data.map((bookingItem: Object) => (
        <div className="bg-slate-200 rounded-md px-8 mx-5 py-2 my-2 font-sans w-[75vw] flex flex-row justify-between items-center">
          <div>
            <div className="text-xl text-black font-bold">
              {bookingItem.hotel.name}
            </div>
            <div className="text-md text-black">
              Booking Date: {bookingItem.bookingDate.substring(0, 10)}
            </div>
            <div className="text-md text-black">
              Check-Out Date: {bookingItem.checkoutDate.substring(0, 10)}
            </div>
          </div>
          <div className="space-x-4">
            <ManageBooking token={session.user.token} bid={bookingItem._id} />
          </div>
        </div>
      ))}
    </main>
  );
}
