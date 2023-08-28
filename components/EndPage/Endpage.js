import { useDispatch, useSelector } from "react-redux";
import style from "./end.module.css";
import { Fragment, useEffect, useState } from "react";
import { counterActions } from "../../store";

function EndPage() {
  const counter = useSelector((state) => state.counter.counter);
  const totalNum = useSelector((state) => state.counter.totalNum);

  const dispatch = useDispatch();
  dispatch(counterActions.setTotalTime());

  const totalTime = useSelector((state) => state.counter.totalTime);

  return (
    <Fragment>
      <p className={style.text}>RESULT</p>
      <div className={style.container}>
        <div className={style.time_container}>
          <p className={style.seconds}>seconds</p>
          <p className={style.time}>{totalTime}</p>
        </div>
        <h1 className={style.score}>{`${counter} / ${totalNum}`}</h1>
      </div>
    </Fragment>
  );
}

export default EndPage;
