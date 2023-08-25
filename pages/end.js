import { Provider } from "react-redux";
import EndPage from "../components/EndPage/Endpage";
import store from "../store";
import Link from "next/link";
import ShowStats from "../components/stats/ShowStats";
import { MongoClient } from "mongodb";

//domain/end
const endPage = (props) => {
  const statsData = props.stats;
  // console.log(statsData);
  return (
    <Provider store={store}>
      <EndPage />
      <Link href="/">home</Link>
      <Link href="/start">regame</Link>
      <ShowStats data={statsData}/>
    </Provider>
  );
};

//여기서 문제 결과들 보여주기.

export async function getStaticProps() {
  // MongoClient
  const client = await MongoClient.connect(
    "mongodb+srv://rune:naver@rune.lkyzqjn.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("stats");
  const statsCollection = db.collection("stats");
  const stats = await statsCollection.find().toArray();

  client.close();

  return {
    props: {
      stats: stats.map((stat) => ({
        id: stat._id.toString(),
        counter: stat.counter,
        totalNum: stat.totalNum,
      })),
    },
  };
}
export default endPage;
