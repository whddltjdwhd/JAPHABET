import Link from "next/link";
import { Fragment, useState } from "react";
import style from "./index.module.css";
import { useRouter } from "next/router";
import getStats from "../components/getStats.js";
function Home() {
  const route = useRouter();
  const onclickHandler = () => {
    getStats();
    route.push("/stats");
  }
  return (

      <main className={style.main}>
        <h1>JAPHABET</h1>
        <Link href="/start" className={style.start}>
          Start
        </Link>

        <button className={style.stats} onClick={onclickHandler}>
          Stats
        </button>
      </main>

  );
}

export default Home;
