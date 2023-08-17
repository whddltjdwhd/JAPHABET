import { Fragment } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

function Problem(props) {
  // console.log(props.text);
  const onClickHandler = () => props.click();
  
  return (
    <Fragment>
      <div>
        <p>{props.nowIdx} / {props.totalNum}</p>
        <h1>{props.text}</h1>
      </div>
      <div>
        <Input id="text"></Input>
        <button onClick={onClickHandler}>Submit</button>
      </div>
    </Fragment>
  );
}

export default Problem;
