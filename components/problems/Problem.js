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
  }, [answerRef]);

  const checkAnswerHandler = () => {
    const answer = answerRef.current.value.trim();

    if (answer.length > 0 && props.name == answer) {
      dispatch(counterActions.increment());
    }

    props.click();
  }

  const onKeyDownHandler = (e) => {
    if (e.isComposing || e.keyCode === 229) return;
    if (e.key === "Enter") {
      checkAnswerHandler();
    }
  };

  const onClickHandler = () => {
    checkAnswerHandler();
  };


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
        <Link href="/" className={style.cancel}>cancel</Link>
      </div>
    </div>
  );
}

export default Problem;
