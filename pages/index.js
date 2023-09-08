import Link from "next/link";
import { Fragment, useState } from "react";
import style from "./index.module.css";
import { useRouter } from "next/router";

function Home() {

  return (

      <main className={style.main}>
        <h1>JAPHABET</h1>
        <Link href="/start" className={style.start}>
          Start
        </Link>

        <Link href="/startStat"className={style.stats}>
          Stats
        </Link>
      </main>

  );
}

export default Home;
