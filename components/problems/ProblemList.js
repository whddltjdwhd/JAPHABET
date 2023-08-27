import { Fragment, useEffect, useState } from "react";
import Problem from "./Problem";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store";

function ProblemList(props) {
  const data = props.problems;
  const router = useRouter();
  const dispatch = useDispatch();
  const [isDone, setIsDone] = useState(false);
  const [currIdx, setCurrIdx] = useState(0);

  const counter = useSelector((state) => state.counter);
  const startTime = useSelector((state) => state.startTime); 
  const totalNum = data.length;

  useEffect(() => {
    if (isDone) {
      async function newStats(finishedData) {
        const response = await fetch("/api/new-stats", {
          method: "POST",
          body: JSON.stringify(finishedData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const resData = await response.json();
        console.log(resData);
      }

      const currentDatetime = new Date();
      const hours = currentDatetime.getHours();
      const minutes = currentDatetime.getMinutes();
      const seconds = currentDatetime.getSeconds();
      const ms = currentDatetime.getMilliseconds();

      const endTime = hours * 3600 + minutes * 60 + seconds + ms / 1000;

      const time = (endTime - startTime).toFixed(3);
      dispatch(counterActions.setEndTime(endTime));
      dispatch(counterActions.setTotalNum(totalNum));

      const finishedData = {
        counter: counter,
        totalNum: totalNum,
        time: time,
      };

      // newStats(finishedData);
      router.push("/end");
    }
  }, [isDone]);

  const onClickHandler = () => {
    //검증
    if (currIdx < data.length - 1) {
      setCurrIdx((idx) => idx + 1);
    } else {
      setIsDone(true);
    }
  };

  return (
    <Problem
      click={onClickHandler}
      key={data[currIdx].id}
      id={data[currIdx].id}
      name={data[currIdx].name}
      text={data[currIdx].text}
      nowIdx={currIdx}
      totalNum={data.length}
    />
  );
}

export default ProblemList;
