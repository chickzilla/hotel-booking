import HotelCatalog from "@/components/HotelCatalog";
import { Suspense } from "react";
import getAllHotels from "@/libs/getAllHotels";
import CircularProgress from "@mui/material/CircularProgress";
import AddingHotelButton from "@/components/AddingHotelButton";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";

export default async function HotelPage() {
  const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;

  const userProfile = await getUserProfile(session.user.token);
  const hotels = getAllHotels();
  return (
    <main className="mt-[80px] flex flex-col justify-center items-center text-center">
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
        <div className="w-[70%] flex flex-row font-bold text-3xl justify-between">
          <div>Popular hotels</div>
          {userProfile?.data.role === "admin" ? <AddingHotelButton /> : null}
        </div>
        <HotelCatalog HotelJson={hotels} />
      </Suspense>
    </main>
  );
}
