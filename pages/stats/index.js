import { MongoClient } from "mongodb";
import Link from "next/link";
import { Fragment, useState } from "react";
import ShowStats from "../../components/stats/ShowStats";

function ShowStatsPage(props) {
  const data = props.stats;
  return (
    <Fragment>
        <ShowStats data={data} />
    </Fragment>
  );
}
export async function getStaticProps() {

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
export default ShowStatsPage;
