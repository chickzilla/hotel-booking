"use client";
export default function DateReserve({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  return (
    <div className="bg-slate-300 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center w-[35vw]">
      <input
        type="date"
        id={id}
        name={name}
        className="w-full rounded-sm px-2 border-2"
      ></input>
    </div>
  );
}
