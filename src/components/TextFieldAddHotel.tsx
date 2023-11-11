import { TextField } from "@mui/material";
import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";

export default function TextFieldAddHotel({
  setParameter,
  header,
  icon,
}: {
  setParameter: Function;
  header: string;
  icon: React.ReactNode;
}) {
  const [value, setValue] = useState("");

  return (
    <TextField
      id="outlined-basic"
      label={header}
      variant="outlined"
      sx={{
        width: "32%",
        "& input": { color: "white" },
        fieldset: { borderColor: "white !important" },
        "&::placeholder": { color: "white" },
        "& label": { color: "white" }, // Set the label color to white when focused
        "&:focus-within": {
          "& label": { color: "white" }, // Set the label color to white when focused
        },
      }}
      size="small"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        setParameter(e.target.value);
      }}
      InputProps={{
        style: { color: "white" },
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
}
