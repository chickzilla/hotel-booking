"use client";

import Image from "next/image";
import { useState } from "react";

export default function Banner() {
  const covers = ["/img/Banner1.png", "/img/Banner8.png"];

  const [index, setIndex] = useState(0);

  return (
    <div
      className="block p-[5px] m-[0px] w-auto h-[75vh] relative bg-white"
      onClick={() => {
        setIndex(index + 1);
      }}
    >
      <Image
        src={covers[index % 2]}
        alt="banner"
        fill={true}
        className="object-cover "
        priority
        sizes="500vh"
      ></Image>
      <div className={"relative left-[5%] top-[12%] w-[40%] font-sans"}>
        <div className="text-[5em] mb-[40px] leading-[95px] text-7xl text-black font-bold  text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-700">
          Explore your place to stay
        </div>
      </div>
    </div>
  );
}
