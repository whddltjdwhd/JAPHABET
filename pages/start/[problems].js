//showProbelms.
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

function ProblemsPage() {
    const router = useRouter();
    const nowId = router.query.problems;
  return (
    <Fragment>
        <h1>Problems : {nowId}</h1>
    </Fragment>
  );
}
//getStaticProps
//getStaticPaths
export default ProblemsPage;
