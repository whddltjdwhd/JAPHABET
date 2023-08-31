import { useEffect, useState } from "react";
import ProblemList from "./ProblemList";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store";

function ShowHiragana(props) {
  const dispatch = useDispatch();

  useEffect(() => {
      const currentDatetime = new Date();
      const hours = currentDatetime.getHours();
      const minutes = currentDatetime.getMinutes();
      const seconds = currentDatetime.getSeconds();
      const ms = currentDatetime.getMilliseconds();

      const startTime = hours * 3600 + minutes * 60 + seconds + ms / 1000;
      dispatch(counterActions.setStartTime(startTime));
      dispatch(counterActions.setCounter(0));
    
  }, []);

  return (
    <div>
      <ProblemList problems={props.problems} />
    </div>
  );
}

export default ShowHiragana;
