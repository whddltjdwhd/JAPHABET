import Link from "next/link";
import { Fragment, useState } from "react";
import ProblemList from "../../components/problems/ProblemList";
const Data = [
    {id: "a1", name: "아", text: " ぁ"},
]
function StartPage() {
  return (
    <Fragment>
        <ProblemList problems={Data}/>
    </Fragment>
  );
}

export default StartPage;
