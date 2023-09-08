import { MongoClient } from "mongodb";
import Link from "next/link";
import { Fragment } from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
function deletePage() {
    const { push } = useRouter();

    useEffect(() => {
       push('/');
    }, []);
    return;
}

export async function getServerSideProps() {
    const client = await MongoClient.connect(process.env.url);
    const db = client.db("stats");
    const statsCollection = db.collection("stats");
    const stats = await statsCollection.deleteMany({ });
  
    client.close();

    return {
      props: {
      },
    };
  }

  export default deletePage;