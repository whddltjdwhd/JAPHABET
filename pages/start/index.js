import Link from "next/link";
import { Fragment, useState } from "react";
import ProblemList from "../../components/problems/ProblemList";
const Data = [
    {id: "a1", name: "아", text: "ぁ"},
    {id: "a2", name: "카", text: "か"},
]
function StartPage(props) {
  return (
    <Fragment>
        <ProblemList problems={props.hiragana}/>
    </Fragment>
  );
}
//getStaticProps
export async function getStaticProps() {
  //이곳에서 data fetching 및 검증을 해야함.
  return {
    props: {
      hiragana: Data,
    }
  };
}

export default StartPage;
