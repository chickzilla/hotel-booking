import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className="bg-black item-center">
      <Banner />
    </main>
  );
}
