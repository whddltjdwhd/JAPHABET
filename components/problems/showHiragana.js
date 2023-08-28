import { useEffect, useState } from "react";
import ProblemList from "./ProblemList";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../store";
import ChooseHiragana from "./ChooseHiragana";

function ShowHiragana(props) {
  const [isStart, setIsStart] = useState(false);
  const choosedData = useSelector((state) => state.hiragana.hiragana)
  const dispatch = useDispatch();
  console.log(choosedData);
  const onClickHandler = () => {
    setIsStart((isStart) => !isStart);
  };

  useEffect(() => {
    if (isStart) {
      const currentDatetime = new Date();
      const hours = currentDatetime.getHours();
      const minutes = currentDatetime.getMinutes();
      const seconds = currentDatetime.getSeconds();
      const ms = currentDatetime.getMilliseconds();

      const startTime = hours * 3600 + minutes * 60 + seconds + ms / 1000;
      dispatch(counterActions.setStartTime(startTime));
      dispatch(counterActions.setCounter(0));
    }
  }, [isStart]);

  return (
    <div>
      {!isStart && <button onClick={onClickHandler}>go</button>}
      {!isStart && <ChooseHiragana></ChooseHiragana>}

      {isStart && <ProblemList problems={props.problems} />}
    </div>
  );
}

export default ShowHiragana;
