"use client";

import TextFieldAddHotel from "./TextFieldAddHotel";
import HotelIcon from "@mui/icons-material/Hotel";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export default function HotelAddForm() {
  return (
    <div className="flex flex-col justify-center border drop-shadow-xl px-5 py-10 w-[35%] space-y-12 items-center bg-white">
      <div className="text-2xl font-semibold w-[100%] px-5">Hotel Detail</div>

      <TextField
        id="hotel name"
        label="hotel name"
        name="hotel name"
        variant="outlined"
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
        id="address"
        label="address"
        name="address"
        variant="outlined"
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
        id="district"
        label="district"
        name="district"
        variant="outlined"
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
        id="province"
        label="province"
        name="province"
        variant="outlined"
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
        id="postal code"
        label="postal code"
        name="postal code"
        variant="outlined"
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
      />

      <TextField
        id="tel"
        label="tel"
        name="tel"
        variant="outlined"
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
        id="picture"
        label="picture"
        name="picture"
        variant="outlined"
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
        <button className="bg-black text-slate-100 py-2 px-3 mb-2 font-semibold rounded z-30 w-24 w-[100%] hover:bg-slate-700 hover:text-white">
          ADD HOTEL
        </button>
        <div className="mt-2 text-zinc-700">
          *Please fill all the information
        </div>
      </div>
    </div>
  );
}
