import { useState, useEffect } from "react";
import Link from "next/link";
import ShowStats from "../../components/stats/ShowStats";
import style from "./index.module.css";

function ShowStatsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await fetch("/api/get-stats", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("데이터 가져오기 실패");
        }
        const resData = await response.json();
        console.log(resData);
        setData(resData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getStats();
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.h1}>SHOW STATS</h1>
      {loading ? (
        <p className={style.loading}>로딩 중...</p>
      ) : error ? (
        <p className={style.error}>오류: {error.message}</p>
      ) : (
        <ShowStats data={data} />
      )}
      <div className={style.wrap}>
        <Link href="/" className={style.home}>
          Home
        </Link>
        <Link href="/delete" className={style.delete}>
          Delete All
        </Link>
      </div>
    </div>
  );
}

export default ShowStatsPage;
