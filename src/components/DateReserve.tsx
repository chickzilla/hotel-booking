"use client";

import createBooking from "@/libs/createBooking";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DateReserve({
  hid,
  token,
}: {
  hid: string;
  token: string;
}) {
  const [bookingDate, setBookingDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const rounter = useRouter();
  const newBookingHandler = async () => {
    const bookingDateTime = new Date(bookingDate).getTime();
    const checkoutDateTime = new Date(checkoutDate).getTime();

    const timeDifference = Math.abs(checkoutDateTime - bookingDateTime);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference > 3) {
      alert("You can book up at most 3 nights");
      return;
    }
    if (bookingDate === "" || checkoutDate === "") {
      alert("Please fill all field");
      return;
    }

    try {
      const response = await createBooking(
        hid,
        token,
        bookingDate,
        checkoutDate
      );
      if (response) {
        alert("Booking Success");
      }
      if (response.ok) {
        rounter.refresh();
        rounter.push("/bookinglist");
      }
    } catch (err) {
      alert("Booking fail, Please book again.");
      console.log(err);
    }
  };
  return (
    <div className="text-center">
      <div className="space-y-10 bg-stone-300 rounded-lg w-fit px-10 py-5 w-[35vw] flex flex-col justify-center items-center">
        <div>
          <div className="text-md text-left text-black font-semibold mb-2">
            Booking First Night:
          </div>
          <div className="bg-neutral-400 rounded-lg w-[30vw] px-10 py-5 flex flex-row justify-center w-[35vw]">
            <input
              type="date"
              id="bookingDate"
              name="bookingDate"
              value={bookingDate}
              onChange={(e) => {
                const formattedDate = new Date(e.target.value)
                  .toISOString()
                  .split("T")[0];
                setBookingDate(formattedDate);
              }}
              className="w-full rounded-sm px-2 border-2"
            ></input>
          </div>
        </div>
        <div>
          <div className="text-md text-left text-black font-semibold mb-2">
            Check-out Nights:
          </div>
          <div className="bg-neutral-400 rounded-lg space-x-5 w-[30vw] px-10 py-5 flex flex-row justify-center w-[35vw] mb-5">
            <input
              type="date"
              id="checkoutDate"
              name="checkoutDate"
              value={checkoutDate}
              onChange={(e) => {
                const formattedDate = new Date(e.target.value)
                  .toISOString()
                  .split("T")[0];
                setCheckoutDate(formattedDate);
                //console.log(formattedDate);
              }}
              className="w-full rounded-sm px-2 border-2"
            ></input>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-slate-100 text-md font-semibold font-sans 
          bg-zinc-800 py-2 px-8 m-4 rounded-full z-30 hover:bg-slate-700 hover:text-white mt-10"
        onClick={() => {
          newBookingHandler();
        }}
      >
        Book Hotel
      </button>
    </div>
  );
}
