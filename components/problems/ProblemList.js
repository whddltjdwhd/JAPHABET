import { Fragment, useEffect, useState } from "react";
import Problem from "./Problem";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store";

function ProblemList(props) {
  const data = props.problems;
  const router = useRouter();
  const [isDone, setIsDone] = useState(false);
  const [currIdx, setCurrIdx] = useState(0);

  const finishedData = {
    counter: useSelector((state) => state.counter),
    totalNum: data.length,
  };
  
  const dispatch = useDispatch();
  dispatch(counterActions.setTotalNum(data.length));

  useEffect(() => {
    if (isDone) {
      async function newStats() {
        const response = await fetch("/api/new-stats", {
          method: "POST",
          body: JSON.stringify(finishedData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
      }

      // newStats();
    }
  }, [isDone]);

  const onClickHandler = () => {
    //검증
    if (currIdx < data.length - 1) {
      setCurrIdx((idx) => idx + 1);
    } else {
      //문제 완료
      //새로운 stat 데이터 베이스에 등록
      setIsDone(true);

      //endPage로 이동
      router.push("/end");
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
