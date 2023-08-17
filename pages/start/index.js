import { MongoClient } from "mongodb";
import { Fragment, useState } from "react";
import ProblemList from "../../components/problems/ProblemList";
const Data = [
  { id: "a1", name: "아", text: "ぁ" },
  { id: "a2", name: "카", text: "か" },
];
function StartPage(props) {
  const data = props.hiraganas;
  // console.log(data);
  return (
    <Fragment>
      <ProblemList problems={data} />
    </Fragment>
  );
}
//getStaticProps
export async function getStaticProps() {
  //이곳에서 data fetching 및 검증을 해야함.
  const client = await MongoClient.connect(
    "mongodb+srv://rune:naver@rune.lkyzqjn.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("problems");
  const problemsCollection = db.collection("problems");
  const problems = await problemsCollection.find().toArray();
  // const a = [{hi: "a"}, {hi: "b"}];
  // console.log(problems);
  client.close();
  return {
    props: {
      hiraganas: problems.map((itm) => ({
        id: itm._id.toString(),
        name: itm.name,
        text: itm.text,
      })),
    },
  };
}

export default StartPage;
