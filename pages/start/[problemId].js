//showProbelms.
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

function ProblemsPage() {
  const router = useRouter();
  const nowId = router.query.problemId;
  return (
    <Fragment>
      <h1>Problems : {nowId}</h1>
    </Fragment>
  );
}
//getStaticPaths
export async function getStaticPaths() {
  return {
    fallback: true,
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
  const some = context.params.problemId;
  console.log(some);
  return {
    props: {
      problemId: some,
    },
  };
}

export default ProblemsPage;
