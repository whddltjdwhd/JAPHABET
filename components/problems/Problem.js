import { Fragment } from "react";

function Problem(props) {
    console.log(props.text);
  return (
    <Fragment>
      <div>
        <p>{props.nowIdx} / {props.totalNum}</p>
        <h1>{props.text}</h1>
        <h3>{props.name}</h3>
      </div>
    </Fragment>
  );
}

export default Problem;
