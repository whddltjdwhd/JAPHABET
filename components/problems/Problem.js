import { Fragment, useEffect, useRef, useState } from "react";
import { counterActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import style from "./Problem.module.css";

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
        dispatch(counterActions.increment());
      } else {
        console.log("틀림");
      }
    }

    //다음 페이지 넘어가기
    props.click();
  };

  const onClickCancelHandler = () => {
    dispatch(counterActions.setCounter(0));
  }
  return (
    <div className={style.b}>
      <div className={style.box}>
        <div>
          <p className={style.page}>
            {props.nowIdx + 1} / {props.totalNum}
          </p>
          <p className={style.text}>{props.text}</p>
        </div>

        <input
          id="answer"
          type="text"
          ref={answerRef}
          onKeyDown={onKeyDownHandler}
          className={style.input}
        />
        <button onClick={onClickHandler} className={style.btn}>
          Submit
        </button>
        <Link href="/" className={style.cancel} onClick={onClickCancelHandler}>cancel</Link>
      </div>
    </div>
  );
}

export default Problem;
