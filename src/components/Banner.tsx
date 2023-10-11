"use client";

import Image from "next/image";
import { useState } from "react";

export default function Banner() {
  const covers = ["/img/Banner2.jpg", "/img/Banner3.jpg"];

  const [index, setIndex] = useState(0);
  const isOddIndex = index % 2 == 1;
  return (
    <div
      className="block p-[5px] m-[0px] w-auto h-[75vh] relative "
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
      <div
        className={`relative ${
          isOddIndex ? "text-black" : "text-white"
        } left-[10%] top-[32%] w-[30%]`}
      >
        <div className="text-4xl mb-[20px] mb-[30px] leading-[60px] font-serif font-medium">
          Enjoy fantastic {isOddIndex ? "view" : "service"} from your hotel
        </div>
        <div className="w-[85%] leading-7 text-xs">
          Discover your ideal getaway with our hotel booking website. Browse
          thousands of hotels worldwide, find unbeatable deals, and book your
          dream stay effortlessly. Your next adventure begins here
        </div>
      </div>
    </div>
  );
}
