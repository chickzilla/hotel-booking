import getUserProfile from "@/libs/getUserProfile";

export default async function BookingListBlock({
  bookingJson,
  profileJson,
}: {
  bookingJson: Object;
  profileJson: Object;
}) {
  const bookingReady = await bookingJson;
  const profileReady = await profileJson;

  //console.log(bookingReady.data);

  const showAll = () => profileReady.data.role === "admin";

  return showAll() ? (
    <main>
      {bookingReady.data.map((bookingItem: Object) => (
        <div className="bg-slate-200 rounded-md px-8 mx-5 py-2 my-2 font-sans">
          <div className="text-xl text-black font-bold">
            {bookingItem.hotel.name}
          </div>
          <div className="text-sm text-black">
            Username: {bookingItem.user.name}
          </div>
          <div className="text-md text-black">
            Booking Date: {bookingItem.bookingDate.substring(0, 10)}
          </div>
          <div className="text-md text-black">
            Check-Out Date: {bookingItem.checkoutDate.substring(0, 10)}
          </div>
        </div>
      ))}
    </main>
  ) : (
    <main>
      {bookingReady.data.map((bookingItem: Object) =>
        bookingItem.user == profileReady.data._id ? (
          <div className="bg-slate-200 rounded-md px-8 mx-5 py-2 my-2 font-sans">
            <div className="text-xl text-black font-bold">
              {bookingItem.hotel.name}
            </div>
            <div className="text-sm text-black">
              Username: {bookingItem.user.name}
            </div>
            <div className="text-md text-black">
              Booking Date: {bookingItem.bookingDate.substring(0, 10)}
            </div>
            <div className="text-md text-black">
              Check-Out Date: {bookingItem.checkoutDate.substring(0, 10)}
            </div>
          </div>
        ) : null
      )}
    </main>
  );
}
