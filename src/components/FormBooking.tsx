import DateReserve from "./DateReserve";

export default function FromBooking() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-8 mt-8">
      <div className="w-fit space-y-2 rounded">
        <div className="text-md text-left text-gray-600">
          Booking First Night:
        </div>

        <DateReserve id="start" name="start" />

        <br />
        <div className="mt-7 space-y-2">
          <label htmlFor="daycount" className="w-auto text-gray-600">
            Nights (1-3 Nights Only):
          </label>
          <DateReserve id="checkout" name="checkout" />
        </div>
      </div>
    </main>
  );
}
