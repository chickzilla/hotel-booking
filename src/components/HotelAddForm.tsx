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
    <div className="flex flex-col justify-center border drop-shadow-xl px-5 py-10 w-[35%] space-y-12 items-center bg-white">
      <div className="text-2xl font-semibold w-[100%] px-5">Hotel Detail</div>

      <TextFieldAddHotel
        setParameter={(value: string) => {
          setName(value);
        }}
        header="Hotel name"
        icon={<HotelIcon />}
      />
      <TextFieldAddHotel
        setParameter={(value: string) => {
          setAddress(value);
        }}
        header="Address"
        icon={<ImportContactsIcon />}
      />

      <TextFieldAddHotel
        setParameter={(value: string) => {
          setDistrict(value);
        }}
        header="District"
        icon={<ImportContactsIcon />}
      />
      <TextFieldAddHotel
        setParameter={(value: string) => {
          setProvince(value);
        }}
        header="Province"
        icon={<ImportContactsIcon />}
      />

      <TextFieldAddHotel
        setParameter={(value: string) => {
          setPostalCode(value);
        }}
        header="Postal Code"
        icon={<LocalPostOfficeIcon />}
      />
      <TextFieldAddHotel
        setParameter={(value: string) => {
          setTel(value);
        }}
        header="Tel"
        icon={<LocalPhoneIcon />}
      />

      <TextFieldAddHotel
        setParameter={(value: string) => {
          setPicture(value);
        }}
        header="Picture"
        icon={<AddAPhotoIcon />}
      />
      <div className="text-center w-[90%] mb-5">
        <button
          className="bg-black text-slate-100 py-2 px-3 mb-2 font-semibold rounded z-30 w-24 w-[100%] hover:bg-slate-700 hover:text-white"
          onClick={() => {}}
        >
          ADD HOTEL
        </button>
        <div className="mt-2 text-zinc-700">
          *Please fill all the information
        </div>
      </div>
    </div>
  );
}
