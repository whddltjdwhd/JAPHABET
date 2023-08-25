import { Provider } from "react-redux";
import store from "../store";
import ProblemList from "./problems/ProblemList";
const App = (props) => {
    const data = props.problems;
  return (
    <Provider store={store}>
      <ProblemList problems = {data}/>
    </Provider>
  );
};

export default App;
