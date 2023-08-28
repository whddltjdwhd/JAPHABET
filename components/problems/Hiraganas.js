import { Fragment } from "react"
import { useDispatch } from "react-redux";
import { hiraganaActions } from "../../store";

const Hiraganas = (props) => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        const hiraData = {
            id: props.id,
            name: props.name,
            text: props.text
        }
        dispatch(hiraganaActions.setHiraganas(hiraData));
    }
    return <div onClick={onClickHandler}>
        <p>{props.name}</p>
        <p>{props.text}</p>

    </div>
}

export default Hiraganas;