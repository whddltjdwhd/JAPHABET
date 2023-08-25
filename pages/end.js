import { Provider } from "react-redux";
import EndPage from "../components/EndPage/Endpage";
import store from "../store";
import Link from "next/link";
import ShowStats from "../components/stats/ShowStats";

//domain/end
const endPage = () => {
  return (
    <Provider store={store}>
      <EndPage />
      <Link href="/">Regame</Link>
      <ShowStats />
    </Provider>
  );
};

//여기서 문제 푼 내용에 대한 data 저장.
export default endPage;
