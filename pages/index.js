import Link from "next/link";
import { Fragment, useState } from "react";

function Home() {
  return (
    <Fragment>
        <h1>JAPHABET</h1>
        <Link href="/start">Start</Link>
        <br></br>
        <Link href="/stats">Stats</Link>
    </Fragment>
  );
}

export default Home;
