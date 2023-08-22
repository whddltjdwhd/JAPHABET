import { Provider } from "react-redux";
import EndPage from "../components/EndPage/Endpage"
import store from "../store";

//domain/end
const endPage = () =>{
    return <Provider store={store}><EndPage /></Provider>;
}

export default endPage;