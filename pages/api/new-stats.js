import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const client = await MongoClient.connect(process.env.url);
      const db = client.db("stats");
      const statsCollections = db.collection("stats");

      const result = await statsCollections.insertOne(data);
      client.close();

      res.status(201).json({ message: "성공적으로 저장되었습니다!" });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ message: "데이터를 저장하는 도중에 에러가 발생했습니다." });
    }
  } else {
    res.status(405).json({ message: "해당 메소드는 사용불가입니다." });
  }
}

export default handler;
