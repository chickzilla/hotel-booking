import HotelIcon from "@mui/icons-material/Hotel";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Hotel from "@/db/models/Hotel";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { useState } from "react";

export default async function HotelAddForm() {
  const addHotel = async (addHotelFrom: FormData) => {
    "use server";
    const name = addHotelFrom.get("hotel name");
    const address = addHotelFrom.get("address");
    const district = addHotelFrom.get("district");
    const province = addHotelFrom.get("province");
    const postalcode = addHotelFrom.get("postal code");
    const tel = addHotelFrom.get("tel");
    const picture = addHotelFrom.get("picture");

    if (postalcode?.length != 5) {
      console.error("Postal code must be 5 digits");
      return;
    }

    try {
      await dbConnect();
      const hotel = await Hotel.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (err) {
      console.error(err);
    }
    revalidateTag("hotels");
    redirect("/hotel");
  };
  return (
    <div className="flex flex-col justify-center border drop-shadow-xl px-5 py-10 w-[35%] space-y-6 items-center bg-white">
      <div className="text-2xl font-semibold w-[100%] px-5">Hotel Detail</div>

      <form action={addHotel} className="w-[100%] h-[100%] ml-10">
        <TextField
          className="mb-10"
          id="hotel name"
          label="hotel name"
          name="hotel name"
          variant="outlined"
          required
          sx={{
            width: "90%",
          }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HotelIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          className="mb-10"
          id="address"
          label="address"
          name="address"
          variant="outlined"
          required
          sx={{
            width: "90%",
          }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ImportContactsIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="mb-10"
          id="district"
          label="district"
          name="district"
          variant="outlined"
          required
          sx={{
            width: "90%",
          }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ImportContactsIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="mb-10"
          id="province"
          label="province"
          name="province"
          variant="outlined"
          required
          sx={{
            width: "90%",
          }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ImportContactsIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="mb-5"
          id="postal code"
          label="postal code"
          name="postal code"
          variant="outlined"
          required
          sx={{
            width: "90%",
          }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPostOfficeIcon />
              </InputAdornment>
            ),
          }}
          helperText="Postal code must be 5 digits"
        />

        <TextField
          className="mb-10"
          id="tel"
          label="tel"
          name="tel"
          variant="outlined"
          required
          sx={{
            width: "90%",
          }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className="mb-10"
          id="picture"
          label="picture"
          name="picture"
          variant="outlined"
          required
          sx={{
            width: "90%",
          }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddAPhotoIcon />
              </InputAdornment>
            ),
          }}
        />

        <div className="text-center w-[90%] mb-5">
          <button
            className="bg-black text-slate-100 py-2 px-3 mb-2 font-semibold rounded z-30 w-24 w-[100%] hover:bg-slate-700 hover:text-white"
            type="submit"
          >
            SUBMIT
          </button>
          <div className="mt-2 text-zinc-700">
            *Please fill all the information
          </div>
        </div>
      </form>
    </div>
  );
}
