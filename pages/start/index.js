import { MongoClient } from "mongodb";
import { Fragment, useState } from "react";
import App from "../../components/App";

function StartPage(props) {
  const data = props.hiraganas;

  return (
    <Fragment>
      <App problems={data} />
    </Fragment>
  );
}
//getStaticProps
export async function getStaticProps() {
  //이곳에서 data fetching 및 검증을 해야함.
  const client = await MongoClient.connect(
    process.env.url
  );
  const db = client.db("problems");
  const problemsCollection = db.collection("problems");
  const problems = await problemsCollection.find().toArray();
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
