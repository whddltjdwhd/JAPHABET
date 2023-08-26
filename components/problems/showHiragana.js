import { useState } from "react";
import ProblemList from "./ProblemList";

function ShowHiragana(props) {
    const [isStart, setIsStart] = useState(false);
    const onClickHandler = () => {
        setIsStart((isStart) => !isStart);
    }
    return <div>
        <button onClick={onClickHandler}>go</button>
        {isStart && <ProblemList problems = {props.problems} />}
    </div>
}

export default ShowHiragana;    