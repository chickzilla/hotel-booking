import Card from "@/components/Card";
import HotelCatalog from "@/components/HotelCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getAllHotels from "@/libs/getAllHotels";

export default function HotelPage() {
  const hotels = getAllHotels();
  return (
    <main className="mt-[50px] bg-slate-50">
      <div
        className="w-1/3 relative left-[14%]
      font-bold text-3xl"
      >
        Popular hotels
      </div>
      <Suspense
        fallback={
          <h1 className="mt-[20px] text-black text-center mb-[20px]">
            Relax and wait...
            <LinearProgress />
          </h1>
        }
      >
        <HotelCatalog HotelJson={hotels} />
      </Suspense>
    </main>
  );
}
