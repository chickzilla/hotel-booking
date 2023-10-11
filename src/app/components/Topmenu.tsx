import TopmenuItem from "./TopmenuItem";

export default function Topmenu() {
  return (
    <div className="fixed top-0 right-0 left-0 z-30 flex flex-row-reverse items-center px-10 h-14 bg-slate-100 justify-between">
      <div className="space-x-10">
        <TopmenuItem title="Sign in" pageRef="" />
        <TopmenuItem title="Sign up" pageRef="" />
      </div>

      <div className="space-x-10 font-serif text-center text-black italic font-semibold">
        Book&
        <p className="text-black inline text-yellow-600">Rest</p>
      </div>
    </div>
  );
}
