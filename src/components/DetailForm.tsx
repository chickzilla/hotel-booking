"use client";
import updateHotel from "@/libs/updateHotel";
import { set } from "mongoose";
import { useState } from "react";

export default function DetailForm({
  role,
  token,
  hid,
  name,
  address,
  provice,
  district,
  postalcode,
  tel,
  picture,
}: {
  role: string;
  token: string;
  hid: string;
  name: string;
  address: string;
  provice: string;
  district: string;
  postalcode: string;
  tel: string;
  picture: string;
}) {
  const [hotelName, setHotelName] = useState(name);
  const [hotelAddress, setHotelAddress] = useState(address);
  const [hotelProvince, setHotelProvince] = useState(provice);
  const [hotelDistrict, setHotelDistrict] = useState(district);
  const [hotelPostalcode, setHotelPostalcode] = useState(postalcode);
  const [hotelTel, setHotelTel] = useState(tel);
  const [isChanging, setIsChanging] = useState(false);
  const [message, setMessage] = useState("");

  const updateHander = async () => {
    if (hotelPostalcode.length != 5) {
      alert("Postal code must be 5 digits");
      return;
    }
    if (hotelTel.length > 50) {
      alert("Tel must be less than 50 digits");
      return;
    }
    if (
      hotelName === "" ||
      hotelAddress === "" ||
      hotelProvince === "" ||
      hotelDistrict === "" ||
      hotelPostalcode === "" ||
      hotelTel === ""
    ) {
      alert("Please fill all field");
      return;
    }

    try {
      const res = await updateHotel(
        token,
        hid,
        hotelName,
        hotelAddress,
        hotelDistrict,
        hotelProvince,
        hotelPostalcode,
        hotelTel,
        picture
      );
      if (res.ok) {
        alert("Update Success");
        setIsChanging(!isChanging);
        setMessage("");
      } else alert("Update fail please try again but res.ok");
    } catch (err) {
      alert("Update fail please try again");
      console.log(err);
    }
  };

  return (
    <div className="w-[100%]">
      <div>
        <div className="font-semibold mx-5 px-1">Name: </div>
        <div
          className={`text-md mx-5 border-4 border-double px-2 mb-2 rounded-md bg-white ${
            isChanging ? "border-blue-300" : ""
          }`}
        >
          <input
            type="text"
            value={hotelName}
            className="w-full"
            onChange={(e) => setHotelName(e.target.value)}
            disabled={!isChanging}
          ></input>
        </div>
      </div>
      <div>
        <div className="font-semibold mx-5 px-1">Address: </div>
        <div
          className={`text-md mx-5 border-4 border-double px-2 mb-2 rounded-md bg-white ${
            isChanging ? "border-blue-300" : ""
          }`}
        >
          {" "}
          <input
            type="text"
            value={hotelAddress}
            className="w-full"
            onChange={(e) => setHotelAddress(e.target.value)}
            disabled={!isChanging}
          ></input>
        </div>
      </div>
      <div>
        <div className="font-semibold mx-5 px-1">District: </div>
        <div
          className={`text-md mx-5 border-4 border-double px-2 mb-2 rounded-md bg-white ${
            isChanging ? "border-blue-300" : ""
          }`}
        >
          {" "}
          <input
            type="text"
            value={hotelDistrict}
            className="w-full"
            onChange={(e) => setHotelDistrict(e.target.value)}
            disabled={!isChanging}
          ></input>
        </div>
      </div>
      <div>
        <div className="font-semibold mx-5 px-1">Province: </div>
        <div
          className={`text-md mx-5 border-4 border-double px-2 mb-2 rounded-md bg-white ${
            isChanging ? "border-blue-300" : ""
          }`}
        >
          {" "}
          <input
            type="text"
            value={hotelProvince}
            className="w-full"
            onChange={(e) => setHotelProvince(e.target.value)}
            disabled={!isChanging}
          ></input>
        </div>
      </div>
      <div>
        <div className="font-semibold mx-5 px-1">Postal Code: </div>
        <div
          className={`text-md mx-5 border-4 border-double px-2 mb-2 rounded-md bg-white ${
            isChanging ? "border-blue-300" : ""
          }`}
        >
          {" "}
          <input
            type="text"
            value={hotelPostalcode}
            className="w-full"
            onChange={(e) => setHotelPostalcode(e.target.value)}
            disabled={!isChanging}
          ></input>
        </div>
      </div>
      <div>
        <div className="font-semibold mx-5 px-1">Tel: </div>
        <div
          className={`text-md mx-5 border-4 border-double px-2 mb-2 rounded-md bg-white ${
            isChanging ? "border-blue-300" : ""
          }`}
        >
          {" "}
          <input
            type="text"
            value={hotelTel}
            className="w-full"
            onChange={(e) => setHotelTel(e.target.value)}
            disabled={!isChanging}
          ></input>
        </div>
      </div>
      {role === "admin" ? (
        <div className="flex flex-row justify-end">
          <div className="text-red-500 font-semibold items-center py-auto justify-center align-center">
            {message}
          </div>
          {isChanging === false ? (
            <button
              className="text-slate-100 text-md font-semibold font-sans 
              bg-sky-700 py-2 px-8 m-4 rounded-full z-30 hover:bg-sky-950 hover:text-white mt-10"
              onClick={() => {
                setIsChanging(!isChanging);
                setMessage("Editing mode");
              }}
            >
              Update
            </button>
          ) : (
            <button
              className="text-slate-100 text-md font-semibold font-sans 
              bg-sky-700 py-2 px-8 m-4 rounded-full z-30 hover:bg-sky-950 hover:text-white mt-10"
              onClick={() => {
                updateHander();
              }}
            >
              Accept
            </button>
          )}
          <button
            className="text-slate-100 text-md font-semibold font-sans 
              bg-red-700 py-2 px-8 m-4 rounded-full z-30 hover:bg-red-950 hover:text-white mt-10"
          >
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
