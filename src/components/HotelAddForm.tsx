"use client";

import { TextField } from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextFieldAddHotel from "./TextFieldAddHotel";

export default function HotelAddForm() {
  const [name, setName] = useState("");
  return (
    <div className="w-[80%] h-[40vh] py-5 px-5 bg-zinc-800 rounded-3xl">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        sx={{
          width: "90%",
          "& input": { color: "white" },
          fieldset: { borderColor: "white !important" },
          "&::placeholder": { color: "white" },
          "& label": { color: "white" },
        }}
        size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle sx={{ color: "white" }} />
            </InputAdornment>
          ),
          style: { color: "white" },
        }}
      />
    </div>
  );
}
