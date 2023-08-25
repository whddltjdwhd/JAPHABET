import NewStats from "../../components/stats/NewStats";

function saveNewStatPage() {

  async function newStats(finishedData) {
    const response = await fetch("/api/new-stats", {
      method: "POST",
      body: JSON.stringify(finishedData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }

  return <NewStats onSaveResult={newStats}></NewStats>
}

export default saveNewStatPage;
