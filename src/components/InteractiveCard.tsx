"use client";

import React from "react";

export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  function onCardAction(event: React.SyntheticEvent) {
    if (event.type == "mouseover") {
      event.currentTarget.classList.remove("shadow-xl");

      event.currentTarget.classList.add("shadow-2xl");
    } else {
      event.currentTarget.classList.remove("shadow-2xl");

      event.currentTarget.classList.add("shadow-xl");
    }
  }
  return (
    <div
      className="w-[20%] h-[380px] rounded-2xl shadow-xl bg-white mx-auto mx-20 my-20"
      onMouseOver={(e) => onCardAction(e)}
      onMouseOut={(e) => onCardAction(e)}
    >
      {children}
    </div>
  );
}
