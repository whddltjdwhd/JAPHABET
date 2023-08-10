import { Fragment } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

function Problem(props) {
    console.log(props.text);
  return (
    <Fragment>
      <div>
        <p>{props.nowIdx} / {props.totalNum}</p>
        <h1>{props.text}</h1>
        <h3>{props.name}</h3>
      </div>
      <div>
        <Input id="text"></Input>
        <Button>Submit</Button>
      </div>
    </Fragment>
  );
}

export default Problem;
