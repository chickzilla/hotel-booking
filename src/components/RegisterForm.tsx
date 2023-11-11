"use client";

import { TextField } from "@mui/material";
import { useState } from "react";
import userRegister from "@/libs/userRegister";
import { useRouter } from "next/navigation";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LockIcon from "@mui/icons-material/Lock";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tel, setTel] = useState("");
  const rounter = useRouter();

  const registerHander = async () => {
    if (password !== confirmPassword) {
      alert("Password not match");
      return;
    }
    if (!name || !email || !password || !confirmPassword || !tel) {
      alert("Please fill all field");
      return;
    }

    try {
      const res = await userRegister(name, email, tel, password);
      if (res.ok) {
        alert("Register Success");
        rounter.push("/api/auth/signin");
      } else alert("Register fail please try again");
    } catch (err) {
      alert("Register fail please try again");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center border drop-shadow-xl bg-slate-100 px-5 py-10 w-[35%] space-y-12 items-center bg-white">
      <div className="text-2xl font-semibold w-[100%] px-5">Sign up</div>

      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        sx={{ width: "90%" }}
        size="small"
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ width: "90%" }}
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-basic"
        label="Tel"
        variant="outlined"
        sx={{ width: "90%" }}
        size="small"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CallIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        sx={{ width: "90%" }}
        type="password"
        size="small"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
        type="password"
        sx={{ width: "90%" }}
        size="small"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />

      <div className="w-[100%] flex flex-col text-center items-center">
        <div className="text-center w-[90%] mb-5">
          <button
            className="bg-black text-slate-100 py-2 px-3 rounded z-30 w-24 w-[100%] hover:bg-slate-700 hover:text-white"
            onClick={() => {
              registerHander();
            }}
          >
            Register
          </button>
        </div>
        <div className="text-center w-[90%] border-t-2 pt-5">
          <button
            className="border border-black border-2 text-black py-2 px-3 rounded z-30 w-24 w-[100%] hover:bg-slate-700 hover:text-white"
            onClick={() => {
              rounter.push("/api/auth/signin");
            }}
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
