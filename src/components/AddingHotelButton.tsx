"use client";

import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/navigation";

export default function AddingHotelButton() {
  const router = useRouter();
  return (
    <>
      <button
        className="bg-red-400 text-slate-100 py-2 px-3 m-2 rounded-full z-30 text-xs font-normal hover:bg-red-700 hover:text-white "
        onClick={() => router.push("/hoteladding")}
      >
        ADD HOTEL
      </button>
    </>
  );
}
