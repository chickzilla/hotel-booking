"use client";

import { useState } from "react";
import TextFieldAddHotel from "./TextFieldAddHotel";
import HotelIcon from "@mui/icons-material/Hotel";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function HotelAddForm() {
  const [name, setName] = useState("");
  const [addess, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [tel, setTel] = useState("");
  const [picture, setPicture] = useState("");

  return (
    <div className="w-[80%] h-[40vh] py-10 px-5 bg-zinc-800 rounded-3xl">
      <div className="flex flex-row px-5 w-[100%] items-center text-center justify-evenly mb-10">
        <TextFieldAddHotel
          setParameter={(value: string) => {
            setName(value);
          }}
          header="Hotel name"
          icon={<HotelIcon sx={{ color: "white" }} />}
        />
        <TextFieldAddHotel
          setParameter={(value: string) => {
            setAddress(value);
          }}
          header="Address"
          icon={<ImportContactsIcon sx={{ color: "white" }} />}
        />
      </div>
      <div className="flex flex-row px-5 w-[100%] items-center text-center justify-evenly mb-10">
        <TextFieldAddHotel
          setParameter={(value: string) => {
            setDistrict(value);
          }}
          header="District"
          icon={<ImportContactsIcon sx={{ color: "white" }} />}
        />
        <TextFieldAddHotel
          setParameter={(value: string) => {
            setProvince(value);
          }}
          header="Province"
          icon={<ImportContactsIcon sx={{ color: "white" }} />}
        />
      </div>
      <div className="flex flex-row px-5 w-[100%] items-center text-center justify-evenly mb-10">
        <TextFieldAddHotel
          setParameter={(value: string) => {
            setPostalCode(value);
          }}
          header="Postal Code"
          icon={<LocalPostOfficeIcon sx={{ color: "white" }} />}
        />
        <TextFieldAddHotel
          setParameter={(value: string) => {
            setTel(value);
          }}
          header="Tel"
          icon={<LocalPhoneIcon sx={{ color: "white" }} />}
        />
      </div>

      <TextFieldAddHotel
        setParameter={(value: string) => {
          setPicture(value);
        }}
        header="Picture"
        icon={<AddAPhotoIcon sx={{ color: "white" }} />}
      />
    </div>
  );
}
