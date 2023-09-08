import { Provider } from "react-redux";
import EndPage from "../components/EndPage/Endpage";
import store from "../store";
import Link from "next/link";
import ShowStats from "../components/stats/ShowStats";
import { MongoClient } from "mongodb";
import style from "./end.module.css";

//domain/end
const endPage = (props) => {
  const statsData = props.stats;
  // console.log(statsData);
  return (
    <Provider store={store}>
      <div className={style.container}>
        <EndPage />
        <ShowStats data={statsData} />
        <div className={style.linkContainer}>
          <Link href="/" className={style.home}>
            home
          </Link>
          <Link href="/start" className={style.regame}>
            regame
          </Link>
        </div>
      </div>
    </Provider>
  );
};

//여기서 문제 결과들 보여주기.

export async function getServerSideProps() {
  // MongoClient
  const client = await MongoClient.connect(
    process.env.url
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
        time: stat.time
      })),
    },
  
  };
}
export default endPage;
