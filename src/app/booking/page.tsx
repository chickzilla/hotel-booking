import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-8">
      <div className="text-xl font-medium">New/Update Booking (hotel_name)</div>
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          Booking First Night (Check-in Night)
        </div>
        <DateReserve />
      </div>
    </main>
  );
}
