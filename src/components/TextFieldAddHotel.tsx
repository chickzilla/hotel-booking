import { TextField } from "@mui/material";
import { useState } from "react";

export default function TextFieldAddHotel(setParameter: Function) {
  const [value, setValue] = useState("");
  return (
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
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        setParameter(value);
      }}
      InputProps={{
        style: { color: "white" },
      }}
    />
  );
}
