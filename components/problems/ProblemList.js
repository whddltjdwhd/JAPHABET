import { Fragment, useState } from "react";
import Problem from "./Problem";

function ProblemList(props) {
  const data = props.problems;
  const [currIdx, setCurrIdx] = useState(0);

  const onClickHandler = () => {
    //검증 필요함.
    setCurrIdx((idx) => idx + 1);
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
