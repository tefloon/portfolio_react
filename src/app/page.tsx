import Intro from "@/components/intro";
import Image from "next/image";

let upperMargin = 24;

export default function Home() {
  return (
    <>
      {/* <div className={`pt-${upperMargin}`}></div> */}
      <main>
        <Intro />
      </main>
    </>
  );
}
