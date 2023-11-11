"use client";

import { TextField } from "@mui/material";
import { useState } from "react";
import userRegister from "@/libs/userRegister";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tel, setTel] = useState("");
  const rounter = useRouter();

  const [role, setRole] = useState("user");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole((event.target as HTMLInputElement).value);
  };

  const registerHander = async () => {
    if (password !== confirmPassword) {
      alert("Password not match");
      return;
    }

    try {
      const res = await userRegister(name, email, tel, password);
      if (res.ok) {
        alert("Register Success");
        rounter.push("/api/auth/signin");
      } else alert("Register Fail");
    } catch (err) {
      alert("Register Fail");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center drop-shadow-xl bg-slate-100 rounded-3xl py-5 px-10 w-[30%] h-[100vh] space-y-10 items-center">
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
        label="Tel"
        variant="standard"
        sx={{ width: "70%", marginY: "20px" }}
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />

      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Role</FormLabel>
        <RadioGroup row value={role} onChange={handleChange}>
          <FormControlLabel value="user" control={<Radio />} label="user" />
          <FormControlLabel value="admin" control={<Radio />} label="admin" />
        </RadioGroup>
      </FormControl>

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
        label="Confirm Password"
        variant="standard"
        sx={{ width: "70%", marginY: "20px" }}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <div className="text-center">
        <button
          className="bg-black text-slate-100 py-2 px-3 m-2 rounded z-30 w-24 w-full hover:bg-slate-700 hover:text-white w-[100%]"
          onClick={() => {
            registerHander();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
