import { useSelector } from "react-redux";

function EndPage() {
    const counter = useSelector((state) => state.counter);
    const totalNum = useSelector((state) => state.totalNum);
    return <h1>{`${counter} / ${totalNum}`}</h1>
}

export default EndPage;