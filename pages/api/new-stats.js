import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://rune:naver@rune.lkyzqjn.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db("stats");
    const statsCollections = db.collection("stats");
    
    const result = await statsCollections.insertOne(data);
    client.close();

    res.status(201).json({message : "성공적으로 저장되었습니다!"})
  }
}

export default handler;