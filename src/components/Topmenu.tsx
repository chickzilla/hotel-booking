import TopMenuButton from "./TopMenuButton";
import TopmenuItem from "./TopmenuItem";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

export default async function Topmenu() {
  const session = await getServerSession(authOption);

  return (
    <div className="fixed top-0 right-0 left-0 z-30 flex flex-row-reverse items-center px-24 h-14 bg-slate-100 justify-between bg-white text-xs opacity-90">
      <div className="space-x-10 flex flex-row justify-center items-center">
        {session?.user?.name ? (
          <div className="text-sm font-semibold">
            <PersonIcon sx={{ marginRight: "5px" }}></PersonIcon>
            {session.user.name}
          </div>
        ) : null}
        {!session ? (
          <TopmenuItem
            title="Sign in"
            pageRef="
          /api/auth/signin"
          />
        ) : (
          <TopmenuItem title="Log out" pageRef="/api/auth/signout" />
        )}

        <TopMenuButton title="Sign up" routerRef="/register" />
      </div>
      <div className="flex flex-row-reverse items-center">
        <div className="mx-10">
          <TopmenuItem title="Hotels" pageRef="/hotel" />
        </div>
        <TopmenuItem title="Booking List" pageRef="/bookinglist" />
        <Link href="..\">
          <div className="space-x-10 font-serif text-center text-black italic font-semibold left-0 mr-10">
            Book&
            <p className="text-black inline text-yellow-600">Rest</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
