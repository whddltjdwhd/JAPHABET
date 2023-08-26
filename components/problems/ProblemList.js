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

  const finishedData = {
    counter: useSelector((state) => state.counter),
    totalNum: data.length,
  };
  
  useEffect(() => {
    async function newStats() {
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

    if (isDone) {
      const currentDatetime = new Date();
      const hours = currentDatetime.getHours();
      const minutes = currentDatetime.getMinutes();
      const seconds = currentDatetime.getSeconds();
    
      const endTime = hours * 3600 + minutes * 60 + seconds;
      dispatch(counterActions.setEndTime(endTime));
      dispatch(counterActions.setTotalNum(data.length));
      
      // newStats();
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
