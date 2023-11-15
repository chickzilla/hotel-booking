import getHotelById from "@/libs/getHotel";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useState } from "react";
import DetailForm from "@/components/DetailForm";

export default async function DetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hotel = await getHotelById(params.hid);

  const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);

  return (
    <main>
      <div className="p-5 flex flex-col">
        <div className="flex flex-row mt-5 mx-[10vw] justify-evenly bg-gray-200 p-5 rounded-lg ">
          <Image
            src={hotel.data.picture}
            alt="Hotel Picture"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="rounded-lg w-[30%] bg-black shadow-md mr-3"
          />
          <div className="flex flex-col shadow-md bg-gray-300 p-2 pt-5 rounded-sm w-[65%] font-sans items-center">
            <DetailForm
              role={profile.data.role}
              token={session.user.token}
              hid={params.hid}
              name={hotel.data.name}
              address={hotel.data.address}
              district={hotel.data.district}
              provice={hotel.data.province}
              postalcode={hotel.data.postalcode}
              tel={hotel.data.tel}
              picture={hotel.data.picture}
            />
            <Link
              href={`/booking/${params.hid}`}
              className="w-full items-center text-center"
            >
              <button
                className="text-slate-100 text-md font-semibold font-sans 
          bg-zinc-800 py-2 px-8 m-4 rounded-full z-30 hover:bg-slate-700 hover:text-white mt-10 w-[90%]"
              >
                Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
      {profile.data.role == "admin" ? (
        <div className="flex flex-row justify-center items-start">
          <button
            className="text-slate-100 text-md font-semibold font-sans 
            bg-sky-700 py-2 px-8 m-4 rounded-full z-30 hover:bg-sky-950 hover:text-white mt-10"
          >
            Update
          </button>
          <button
            className="text-slate-100 text-md font-semibold font-sans 
            bg-red-500 py-2 px-8 m-4 rounded-full z-30 hover:bg-red-800 hover:text-white mt-10"
          >
            Delete
          </button>
        </div>
      ) : null}
    </main>
  );
}
