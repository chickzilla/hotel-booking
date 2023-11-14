"use client";
import { useState } from "react";

export default function DetailForm({
  address,
  provice,
  district,
  postalcode,
  tel,
}: {
  address: string;
  provice: string;
  district: string;
  postalcode: string;
  tel: string;
}) {
  const [hotelAddress, setHotelAddress] = useState(address);
  const [hotelProvince, setHotelProvince] = useState(provice);
  const [hotelDistrict, setHotelDistrict] = useState(district);
  const [hotelPostalcode, setHotelPostalcode] = useState(postalcode);
  const [hotelTel, setHotelTel] = useState(tel);
  const [isChanging, setIsChanging] = useState(false);

  return (
    <div className="w-[100%]">
      <div>
        <div className="font-semibold mx-5 px-1">Address: </div>
        <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
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
        <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
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
        <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
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
        <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
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
        <div className="text-md mx-5 text-black border-4 border-double px-2 mb-2 rounded-md bg-white">
          <input
            type="text"
            value={hotelTel}
            className="w-full"
            onChange={(e) => setHotelTel(e.target.value)}
            disabled={!isChanging}
          ></input>
        </div>
      </div>
      {isChanging === false ? (
        <button
          className="text-slate-100 text-md font-semibold font-sans 
            bg-sky-700 py-2 px-8 m-4 rounded-full z-30 hover:bg-sky-950 hover:text-white mt-10"
          onClick={() => setIsChanging(!isChanging)}
        >
          Update
        </button>
      ) : (
        <button
          className="text-slate-100 text-md font-semibold font-sans 
            bg-sky-700 py-2 px-8 m-4 rounded-full z-30 hover:bg-sky-950 hover:text-white mt-10"
          onClick={() => setIsChanging(!isChanging)}
        >
          Accept
        </button>
      )}
    </div>
  );
}
