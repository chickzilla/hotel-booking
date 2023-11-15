import FromBooking from "@/components/FormBooking";
import createBooking from "@/libs/createBooking";
import getHotelById from "@/libs/getHotel";
import { useSearchParams } from "next/navigation";

export default async function BookingPage({
  params,
}: {
  params: { hid: string };
}) {
  const hotel = await getHotelById(params.hid);
  console.log(params.hid);
  return (
    <main className="w-[100%] flex flex-col items-center space-y-8 mt-8">
      <div className="text-xl font-medium">
        New/Update Booking {hotel.data.name}
      </div>
      <FromBooking />
      <button
        type="submit"
        className="text-slate-100 text-md font-semibold font-sans 
              bg-zinc-800 py-2 px-8 m-4 rounded-full z-30 hover:bg-slate-700 hover:text-white mt-10"
      >
        Book Hotel
      </button>
    </main>
  );
}
