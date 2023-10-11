"use client";

import Link from "next/link";

export default function TopmenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <Link href={pageRef} className="text-center text-black text-sm font-medium">
      {title}
    </Link>
  );
}
