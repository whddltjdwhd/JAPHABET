import { useSelector } from "react-redux";
import style from "./end.module.css";
import { Fragment } from "react";

function EndPage() {
  const counter = useSelector((state) => state.counter);
  const totalNum = useSelector((state) => state.totalNum);
  const start = useSelector((state) => state.startTime);
  const end = useSelector((state) => state.endTime);
  console.log(start);
  console.log(end);
  const time = end - start;
  return (
    <Fragment>
      <p className={style.text}>RESULT</p>
      <div className={style.container}>
        <div className={style.time_container}>
          <p className={style.seconds}>seconds</p>
          <p className={style.time}>{time}</p>
        </div>
        <h1 className={style.score}>{`${counter} / ${totalNum}`}</h1>
      </div>
    </Fragment>
  );
}

export default EndPage;
