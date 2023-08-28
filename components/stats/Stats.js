import { Fragment } from "react";
import style from "./stats.module.css"

const Stats = (props) => {
    return <li className={style.item}>
        <p className={style.result}>{props.counter} / {props.totalNum}</p>
        <p>{props.time}</p>
    </li>
}

export default Stats;