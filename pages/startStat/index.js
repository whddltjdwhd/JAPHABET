import Link from "next/link";
import { useEffect } from "react";

function StartStatsPage() {
  useEffect(() => {
    const getStats = async () => {
      const response = await fetch("/api/get-stats", {
        method: "GET",
      });
      const resData = await response.json();
    };
    getStats();
  }, []);
  return <Link href="/stats">go</Link>;
}

export default StartStatsPage;
