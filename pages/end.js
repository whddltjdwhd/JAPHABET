import { Provider } from "react-redux";
import EndPage from "../components/EndPage/Endpage";
import store from "../store";
import Link from "next/link";

//domain/end
const endPage = () => {
  return (
    <Provider store={store}>
      <EndPage />
      <Link href="/">Regame</Link>
      {/* <Link href="/new-stats">save the result</Link> */}
    </Provider>
  );
};

//여기서 문제 푼 내용에 대한 data 저장.
export default endPage;
