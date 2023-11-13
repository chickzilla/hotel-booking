import getHotelById from "@/libs/getHotel";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

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
    <div>
      <div className="p-5 flex flex-col">
        <h1 className="text-2xl font-medium text-black text-center font-sans ">
          {hotel.data.name}
        </h1>
        <div className="flex flex-row mt-5 mx-[10vw] justify-evenly bg-gray-200 p-5 rounded-lg ">
          <Image
            src={hotel.data.picture}
            alt="Hotel Picture"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-lg w-[30%] bg-black shadow-md mr-3"
          />
          <div className="flex flex-col shadow-md bg-gray-300 p-2 pt-5 rounded-sm w-[65%] font-sans items-center">
            <div className="w-[100%]">
              <div>
                <div className="font-semibold mx-5 px-1">Address: </div>
                <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
                  {hotel.data.address}
                </div>
              </div>
              <div>
                <div className="font-semibold mx-5 px-1">District: </div>
                <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
                  {hotel.data.district}
                </div>
              </div>
              <div>
                <div className="font-semibold mx-5 px-1">Province: </div>
                <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
                  {hotel.data.province}
                </div>
              </div>
              <div>
                <div className="font-semibold mx-5 px-1">Postal Code: </div>
                <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
                  {hotel.data.postalcode}
                </div>
              </div>
              <div>
                <div className="font-semibold mx-5 px-1">Tel: </div>
                <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
                  {hotel.data.tel}
                </div>
              </div>
            </div>
            <Link href={`/booking?id${params.hid}`}>
              <button
                className="text-slate-100 text-md font-semibold font-sans 
          bg-zinc-800 py-2 px-8 m-4 rounded-full z-30 hover:bg-slate-700 hover:text-white mt-10"
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
    </div>
  );
}
