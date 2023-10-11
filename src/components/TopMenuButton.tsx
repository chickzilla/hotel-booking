"use client";

import { useRouter } from "next/navigation";

export default function TopMenuButton({
  title,
  routerRef,
}: {
  title: string;
  routerRef: string;
}) {
  const rounter = useRouter();
  return (
    <>
      <button
        className="bg-black text-slate-100 py-2 px-3 m-2 rounded z-30 w-24 hover:bg-slate-700 hover:text-white "
        onClick={(e) => {
          rounter.push(routerRef);
          e.stopPropagation();
        }}
      >
        {title}
      </button>
    </>
  );
}
