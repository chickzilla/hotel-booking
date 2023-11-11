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
        width: "90%",
      }}
      size="small"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        setParameter(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
}
