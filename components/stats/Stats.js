import { Fragment } from "react";
import style from "./stats.module.css"

const Stats = (props) => {
    return <li className={style.item}>
        <div className={style.time_container}>
            <p className={style.time_text}>seconds</p>
            <p className={style.time}>{props.time}</p>
        </div>
        <p className={style.result}>{props.counter} / {props.totalNum}</p>
    </li>
}

export default Stats;