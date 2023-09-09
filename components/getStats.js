
const getStats = async () => {
    const response = await fetch("/api/get-stats", {
      method: "GET",
    });
    const resData = await response.json();
  };

export default getStats;
