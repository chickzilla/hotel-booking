import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-8 mt-8">
      <div className="text-xl font-medium">New/Update Booking (hotel_name)</div>
      <div className="w-fit space-y-2 rounded">
        <div className="text-md text-left text-gray-600">
          Booking First Night:
        </div>
        <DateReserve />
        <br />
        <div className="mt-7">
          <label htmlFor="daycount" className="w-auto text-gray-600">
            Nights (1-3 Nights Only):
          </label>
          <div className="bg-slate-300 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 mt-2 w-full mb-5">
            <input
              type="number"
              required
              id="daycount"
              name="daycount"
              placeholder="1"
              min={1}
              max={3}
              className="w-full rounded-md h-[30px] px-2 focus:outline-none focus:border-blue-600 border-2"
            ></input>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-slate-100 text-md font-semibold font-sans 
          bg-zinc-800 py-2 px-8 m-4 rounded-full z-30 hover:bg-slate-700 hover:text-white mt-10"
      >
        Book Hotel
      </button>
    </main>
  );
}
