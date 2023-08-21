import { Fragment, useState } from "react";
import Problem from "./Problem";
import { useRouter } from "next/router";

function ProblemList(props) {
  const data = props.problems;
  // console.log(data[0].id);
  const router = useRouter();
  const [currIdx, setCurrIdx] = useState(0);

  const onClickHandler = () => {
    //검증 필요함.
    if (currIdx < data.length - 1) {
      setCurrIdx((idx) => idx + 1);
    } else {
      //문제 완료
      router.push("/end");
    }
  };

  return (
    <Fragment>
      <Problem
        click={onClickHandler}
        key={data[currIdx].id}
        id={data[currIdx].id}
        name={data[currIdx].name}
        text={data[currIdx].text}
        nowIdx={currIdx}
        totalNum={data.length}
      />
    </Fragment>
  );
}

export default ProblemList;
