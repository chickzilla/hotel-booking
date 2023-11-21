"use client";

import createBooking from "@/libs/createBooking";
import getBookingById from "@/libs/getBooking";
import updateBooking from "@/libs/updateBooking";
import { useRouter } from "next/navigation";
import { useState } from "react";
import dayjs from "dayjs";

export default function DateReserve({
  id,
  token,
  typeofAction,
}: {
  id: string;
  token: string;
  typeofAction: string;
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
    if (daysDifference < 0) {
      alert("The first night must come before the night of Check-out.");
    }
    if (bookingDate === "" || checkoutDate === "") {
      alert("Please fill all field");
      return;
    }
    const currentDate = new Date().toISOString().split("T")[0];

    if (
      new Date(bookingDate) < new Date(currentDate) ||
      new Date(checkoutDate) < new Date(currentDate)
    ) {
      alert("Selected date cannot be in the past");
      return;
    }

    if (typeofAction == "update") {
      const booked = await getBookingById(token, id);
      setBookingDate(dayjs(booked.data.bookingDate).format("YYYY-MM-DD"));
      setCheckoutDate(dayjs(booked.data.checkoutDate).format("YYYY-MM-DD"));

      try {
        const response = await updateBooking(
          token,
          id,
          bookingDate,
          checkoutDate
        );
        if (response.ok) {
          rounter.refresh();
          rounter.push("/bookinglist");
        }
      } catch (err) {
        alert(
          "Update fail, Please update again. (You can book up at most 3 nights)"
        );
        console.log(err);
      }
    }

    if (typeofAction == "create") {
      try {
        const response = await createBooking(
          id,
          token,
          bookingDate,
          checkoutDate
        );
        if (response.ok) {
          rounter.refresh();
          rounter.push("/bookinglist");
        }
      } catch (err) {
        alert("Booking fail, Please book again.");
        console.log(err);
      }
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
                setBookingDate(dayjs(formattedDate).format("YYYY-MM-DD"));
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
                setCheckoutDate(dayjs(formattedDate).format("YYYY-MM-DD"));
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
        {typeofAction == "create" ? "Book Hotel" : "Update Booking"}
      </button>
    </div>
  );
}
