import { Fragment } from "react";

const Stats = (props) => {
    return <li>
        <h1>Stats</h1>
        <p>{props.counter} / {props.totalNum}</p>   
    </li>
}

export default Stats;