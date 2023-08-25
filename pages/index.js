import Link from "next/link";
import { Fragment, useState } from "react";
import style from "./index.module.css"

function Home() {
  const Data = [
    {id: "a1", name: "아", text: "ぁ"},
    {id: "a2", name: "카", text: "か"},
  ]
  return (
    <main className={style.main}>
        <h1>JAPHABET</h1>
        <Link href="/start" className={style.start}>Start</Link>

        <Link href="/stats" className={style.stats}>Stats</Link>
    </main>
  );
}

export default Home;
