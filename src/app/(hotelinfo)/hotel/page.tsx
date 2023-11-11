import HotelCatalog from "@/components/HotelCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getAllHotels from "@/libs/getAllHotels";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CircularProgress from "@mui/material/CircularProgress";
import HotelAddForm from "@/components/HotelAddForm";

export default function HotelPage() {
  const hotels = getAllHotels();
  return (
    <main className="mt-[80px] flex flex-col justify-center items-center text-center">
      <HotelAddForm />
      <Suspense
        fallback={
          <div className="text-blue text-center mb-[20px] my-[150px] items-center flex flex-col w-full text-2xl font-bold">
            Calling hotels....
            <CircularProgress
              sx={{ marginTop: "50px", color: "#52525b" }}
              size={80}
              color="inherit"
            />
          </div>
        }
      >
        <div className="w-[80vw] flex flex-row font-bold text-3xl justify-between">
          <div>Popular hotels</div>
          {/*<Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
            ADD HOTEL
      </Button>*/}
        </div>
        <HotelCatalog HotelJson={hotels} />
      </Suspense>
    </main>
  );
}
