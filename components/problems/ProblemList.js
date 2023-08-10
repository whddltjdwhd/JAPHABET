import { Fragment } from "react";
import Problem from "./Problem";

function ProblemList(props) {
  const data = props.problems;
  return (
    <Fragment>
      {data.map((itm) => {
        const nowIdx = data.findIndex(e => e.name === itm.name) + 1;
        console.log(nowIdx);
        return (
          <Problem
            key={itm.id}
            id={itm.id}
            name={itm.name}
            text={itm.text}
            nowIdx={nowIdx}
            totalNum={data.length}
          />
        );
      })}
    </Fragment>
  );
}

export default ProblemList;
