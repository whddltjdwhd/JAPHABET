import { Fragment } from "react";
import Problem from "./Problem";

function ProblemList(props) {
  const data = props.problems;
  return <Fragment>
    { data.map((itm) => {
    return <Problem key={itm.id} id={itm.id} name={itm.name} text={itm.text} />;
  })}
  </Fragment>;
}

export default ProblemList;
