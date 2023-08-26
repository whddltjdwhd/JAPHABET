import { useSelector } from "react-redux";
import style from "./end.module.css"
import { Fragment } from "react";

function EndPage() {
    const counter = useSelector((state) => state.counter);
    const totalNum = useSelector((state) => state.totalNum);
    return <Fragment>
        <p className={style.text}>RESULT</p>
        <h1 className={style.score}>{`${counter} / ${totalNum}`}</h1>
    </Fragment>
}

export default EndPage;