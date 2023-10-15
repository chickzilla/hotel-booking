"use client";
import { useRouter } from "next/navigation";

export default function HomeCard() {
  const rounter = useRouter();
  return (
    <div
      className="bg-white flex flex-row-reverse w-auto h-[65vh] 
    py-[80px] px-[5px]"
    >
      <div
        className="right-[10%] relative pl-[50px] pt-[40px]
      border border-l-zinc-700 border-y-white border-r-white border-l-4"
      >
        <div className="text-black font-sans font-bold text-4xl  mb-10 ">
          Choose the best hotel
          <p className="font-sans text-base font-normal mt-3 text-gray-500 mt-5">
            Your Unforgettable Journey Starts Here!
          </p>
        </div>

        <button
          className="text-slate-100 text-4xl font-semibold font-sans 
          bg-zinc-800 py-2 px-3 m-4 rounded-full z-30 w-60 h-20 hover:bg-slate-700 hover:text-white "
          onClick={(e) => {
            rounter.push("/hotel");
            e.stopPropagation();
          }}
        >
          View
        </button>
      </div>
    </div>
  );
}
