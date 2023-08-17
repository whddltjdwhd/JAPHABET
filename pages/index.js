import Link from "next/link";
import { Fragment, useState } from "react";

function Home() {
  const Data = [
    {id: "a1", name: "아", text: "ぁ"},
    {id: "a2", name: "카", text: "か"},
  ]
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
