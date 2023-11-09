"use client";

import { TextField } from "@mui/material";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  return (
    <div className="flex flex-col justify-center drop-shadow-xl bg-slate-100 rounded-3xl py-5 px-10 w-[30%] h-[80vh] space-y-10 items-center">
      <div className="text-center text-2xl font-bold ">Registation</div>

      <TextField
        id="outlined-basic"
        label="Name"
        variant="standard"
        sx={{ width: "70%", marginY: "20px" }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="standard"
        sx={{ width: "70%", marginY: "20px" }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="standard"
        sx={{ width: "70%", marginY: "20px" }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Tel"
        variant="standard"
        sx={{ width: "70%", marginY: "20px" }}
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />

      <div className="text-center">
        <button className="bg-black text-slate-100 py-2 px-3 m-2 rounded z-30 w-24 w-full hover:bg-slate-700 hover:text-white w-[100%]">
          Register
        </button>
      </div>
    </div>
  );
}
