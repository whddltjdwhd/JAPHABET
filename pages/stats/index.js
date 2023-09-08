import { MongoClient } from "mongodb";
import Link from "next/link";
import { Fragment, useState } from "react";
import ShowStats from "../../components/stats/ShowStats";
import style from "./index.module.css";
function ShowStatsPage(props) {
  const data = props.stats;
  return (
    <div className={style.container}>
      <h1 className={style.h1}>SHOW STATS</h1>
      <ShowStats data={data} />
      <div className={style.wrap}>
        <Link href="/" className={style.home}>
          HOME
        </Link>
        <Link href="/delete" className={style.delete}>DELETE ALL</Link>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const client = await MongoClient.connect(process.env.url);
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
        time: stat.time,
      })),
    },
  };
}
export default ShowStatsPage;
