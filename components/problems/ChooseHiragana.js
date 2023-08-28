import A from "../../hiragana/A";
import Hiraganas from "./Hiraganas";


const ChooseHiragana = () => {
    const all = [{ id: "alp1", data: A },];
    console.log(all);

    return all.map((itm) => {
        return <ul key={itm.id}>
            {itm.data.map((alp) => {
                return <li key={alp.id}><Hiraganas id={alp.id} name={alp.name} text={alp.text} /></li>
            })}
        </ul>

    })
}

export default ChooseHiragana;