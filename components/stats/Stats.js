import { Fragment } from "react";

const Stats = (props) => {
    return <Fragment>
        <h1>Stats</h1>
        <p>{props.counter} / {props.totalNum}</p>   
    </Fragment>
}

export default Stats;