//start/[id]
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import ProblemList from "../../components/problems/ProblemList";
import Problem from "../../components/problems/Problem";

function ProblemsPage() {
  const router = useRouter();
  const data = router.query.problemsData;
  console.log(data);
  return (
    <Fragment>
      <Problem key={"a1"} text={"ぁ"} nowIdx={0} totalNum={2} />
    </Fragment>
  );
}
//getStaticPaths
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          problemId: "a1",
        },
      },
      {
        params: {
          problemId: "a2",
        },
      },
    ],
  };
}
//getStaticProps
export async function getStaticProps(context) {
  const id = context.params.problemId;
  return {
    props: {
      problemsData: {
        problemId: id,
        text: "ぁ",
        name: "아",
      },
    },
  };
}

export default ProblemsPage;
