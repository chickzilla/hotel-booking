import HotelCatalog from "@/components/HotelCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getAllHotels from "@/libs/getAllHotels";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function HotelPage() {
  const hotels = getAllHotels();
  return (
    <main className="mt-[80px] bg-slate-50 flex flex-col justify-center items-center text-center">
      <div className="w-[80vw] flex flex-row font-bold text-3xl justify-between">
        <div>Popular hotels</div>
        <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
          ADD HOTEL
        </Button>
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
