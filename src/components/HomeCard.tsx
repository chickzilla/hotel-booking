"use client";
import { useRouter } from "next/navigation";
import HotelIcon from "@mui/icons-material/Hotel";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import SearchIcon from "@mui/icons-material/Search";

export default function HomeCard() {
  const rounter = useRouter();
  return (
    <div
      className="flex flex-row justify-evenly items-center 
    py-[100px] px-20"
    >
      <div className="flex flex-col justify-center text-center w-[60%] space-y-10 text-zinc-600 ">
        <div className="h-30% text-4xl space-x-2 font-bold items-center flex flex-row justify-evenly ">
          <SearchIcon
            sx={{
              width: "12%",
              height: "10%",
              color: "black",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "#f0a830",
            }}
          />
          Find the best place
        </div>
        <div className="h-30% text-4xl space-x-2 font-bold items-center flex flex-row justify-evenly ">
          <BookmarkAddIcon
            sx={{
              width: "12%",
              height: "10%",
              color: "black",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "#78c0a8",
            }}
          />
          Book the best deal
        </div>
        <div className="h-30% text-4xl space-x-2 font-bold items-center flex flex-row justify-evenly">
          <HotelIcon
            sx={{
              width: "12%",
              height: "10%",
              color: "black",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "#fcebb6",
            }}
          />
          Take the best rest
        </div>
      </div>
      <div
        className="w-[40%] pl-14 pt-10
      border border-l-zinc-700 border-y-gray-100 border-l-4"
      >
        <div className="text-black font-sans font-bold text-4xl  mb-10 ">
          Choose the best hotel
          <p className="font-sans text-base font-normal mt-3 text-gray-500 mt-5">
            Your Unforgettable Journey Starts Here!
          </p>
        </div>

        <button
          className="text-slate-100 text-4xl font-semibold font-sans 
          bg-red-500 py-2 px-3 m-4 rounded-full z-30 w-60 h-20 hover:bg-red-700 hover:text-white "
          onClick={(e) => {
            rounter.refresh();
            rounter.push("/hotel");
            e.stopPropagation();
          }}
        >
          Choose
        </button>
      </div>
    </div>
  );
}
