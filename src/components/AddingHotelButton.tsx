"use client";

import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/navigation";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

import { getServerSession } from "next-auth";

export default function AddingHotelButton() {
  /* const session = await getServerSession(authOption);
  if (!session || !session.user.token) return null;

  const userProfile = await getUserProfile(session.user.token);*/
  const router = useRouter();
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => router.push("/hoteladding")}
      >
        ADD HOTEL
      </Button>
    </>
  );
}
