import TopMenuButton from "./TopMenuButton";
import TopmenuItem from "./TopmenuItem";

export default function Topmenu() {
  return (
    <div className="fixed top-0 right-0 left-0 z-30 flex flex-row-reverse items-center px-24 h-14 bg-slate-100 justify-between bg-white text-xs opacity-90">
      <div className="space-x-10 mr-5">
        <TopmenuItem title="Sign in" pageRef="" />
        <TopMenuButton title="Sign up" routerRef="" />
      </div>

      <div className="space-x-10 font-serif text-center text-black italic font-semibold">
        Book&
        <p className="text-black inline text-yellow-600">Rest</p>
      </div>
    </div>
  );
}
