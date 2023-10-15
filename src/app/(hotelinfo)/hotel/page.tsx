import Card from "@/components/Card";
import HotelCatalog from "@/components/HotelCatalog";

export default function HotelPage() {
  return (
    <main className="mt-[50px] bg-slate-50">
      <div
        className="w-1/3 relative left-[14%]
      font-bold text-3xl"
      >
        Popular hotels
      </div>
      <HotelCatalog />
    </main>
  );
}
