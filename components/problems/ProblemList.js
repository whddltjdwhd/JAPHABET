import { useEffect, useState } from "react";
import Problem from "./Problem";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store";

function ProblemList(props) {
  const problemsData = props.problems;
  const router = useRouter();
  const dispatch = useDispatch();
  const [isAllProblemsCompleted, setIsAllProblemsCompleted] = useState(false);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const counter = useSelector((state) => state.counter);
  const startTime = useSelector((state) => state.startTime);
  const totalNum = problemsData.length;

  useEffect(() => {
    if (isAllProblemsCompleted) {
      const newStats = async (finishedData) => {
        try {
          const response = await fetch("/api/new-stats", {
            method: "POST",
            body: JSON.stringify(finishedData),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const resData = await response.json();
          console.log(resData);
        } catch (error) {
          console.error("데이터를 보내는 와중에 ERROR가 발생했습니다:", error);
        }
      };

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
        counter,
        totalNum,
        time,
      };

      if (finishedData.totalNum !== 0) {
        newStats(finishedData);
      }

      router.push("/end");
    }
  }, [isAllProblemsCompleted]);

  const onClickHandler = () => {
    if (currentProblemIndex < problemsData.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
    } else {
      setIsAllProblemsCompleted(true);
    }
  };

  const currentProblem = problemsData[currentProblemIndex];

  return (
    <Problem
      click={onClickHandler}
      key={currentProblem.id}
      id={currentProblem.id}
      name={currentProblem.name}
      text={currentProblem.text}
      nowIdx={currentProblemIndex}
      totalNum={problemsData.length}
      isDone={isAllProblemsCompleted}
    />
  );
}

export default ProblemList;
