"use client";
import FromBooking from "@/components/FormBooking";
import createBooking from "@/libs/createBooking";
import getHotelById from "@/libs/getHotel";
import { useSearchParams } from "next/navigation";

export default function BookingPage() {
  const urlParams = useSearchParams();
  const hid = urlParams.get("id");
  if (!hid) return null;
  //const hotel_name = await getHotelById(hid);
  const bookingData = {
    bookingDate: document.getElementById("start"),
    checkoutDate: document.getElementById("date"),
    createAt: Date.now(),
  };
  console.log(hid);
  //createBooking(hid, bookingData);
  return (
    <main className="w-[100%] flex flex-col items-center space-y-8 mt-8">
      <FromBooking />
      <button
        type="submit"
        className="text-slate-100 text-md font-semibold font-sans 
              bg-zinc-800 py-2 px-8 m-4 rounded-full z-30 hover:bg-slate-700 hover:text-white mt-10"
        onClick={() => createBooking(hid, bookingData)}
      >
        Book Hotel
      </button>
    </main>
  );
}
