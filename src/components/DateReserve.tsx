"use client";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DateReserve() {
  return (
    <div className="bg-slate-300 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white border-2 focus:outline-none focus:border-blue-400"></DatePicker>
      </LocalizationProvider>
    </div>
  );
}
