import { Fragment, useEffect, useRef, useState } from "react";
import { counterActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

function Problem(props) {
  const dispatch = useDispatch();
  const answerRef = useRef();

  useEffect(() => {
    //input 창에 자동 focus 기능
    if (answerRef.current) {
      answerRef.current.focus();
    }
  }, []);

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      console.log("onKey");
      onClickHandler();
    }
  };

  const onClickHandler = () => {
    // 맞았는지 확인
    const answer = answerRef.current.value;

    if (answer.trim().length > 0) {
      if (props.name == answer) {
        console.log(`${answer} : ${props.name} => 동일`);
        dispatch(counterActions.increament());
      } else {
        console.log("틀림");
      }
    }

    //다음 페이지 넘어가기
    props.click();
  };

  return (
    <Fragment>
      <div>
        <p>
          {props.nowIdx + 1} / {props.totalNum}
        </p>
        <h1>{props.text}</h1>
      </div>
      <div>
        <input
          id="answer"
          type="text"
          ref={answerRef}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={onClickHandler}>Submit</button>
        <Link href="/">cancel</Link>
      </div>
    </Fragment>
  );
}

export default Problem;
