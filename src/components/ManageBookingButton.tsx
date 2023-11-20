"use client";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import deleteBooking from "@/libs/deleteBooking";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function ManageBooking({
  token,
  bid,
}: {
  token: string;
  bid: string;
}) {
  //console.log(token);
  //console.log(bid);
  const rounter = useRouter();
  const [checkDelete, setCheckDelete] = useState(false);
  const deleteHandler = async () => {
    try {
      const res = await deleteBooking(token, bid);
      //rounter.push("/hotel");
      //console.log(res.status);

      if (res.ok) {
        rounter.refresh();
        rounter.push("/bookinglist");
      } else alert("Delete fail please try again but res.ok");
    } catch (err) {
      alert("Delete fail please try again");
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-2 w-[5vw]">
      <div>
        <div className="w-[5vw]">
          <Link href={`/update/${bid}`}>
            <DriveFileRenameOutlineSharpIcon />
          </Link>
        </div>
      </div>
      <div>
        {checkDelete === false ? (
          <div onClick={() => setCheckDelete(!checkDelete)} className="w-[5vw]">
            <DeleteSharpIcon />
          </div>
        ) : (
          <div className="w-[5vw] flex flex-row items-center justify-evenly space-x-2">
            <button
              className="text-slate-100 text-sm font-semibold font-sans 
          bg-red-700 rounded-full p-1 z-30 hover:bg-red-950 hover:text-white"
              onClick={() => {
                deleteHandler();
                setCheckDelete(!checkDelete);
              }}
            >
              Sure!
            </button>
            <button
              className="text-slate-100 text-sm font-semibold font-sans 
              bg-gray-700 rounded-full p-1 z-30 hover:bg-red-950 hover:text-white"
              onClick={() => {
                setCheckDelete(!checkDelete);
              }}
            >
              No!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
