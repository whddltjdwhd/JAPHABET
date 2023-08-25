import { Fragment } from "react";

const NewStats = (props) => {
  const DUMMY = { counter: 3, totalNum: 5 };

  const onClickHandler = () => {
    props.onSaveResult(DUMMY);
  };

  return (
    <Fragment>
      <h1>Do you want to save the result?</h1>
      <p>3 / 5</p>
      <button onClick={onClickHandler}>yes</button>
      <button>no</button>
    </Fragment>
  );
};

export default NewStats;
