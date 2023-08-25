import Stats from "./Stats";

const DUMMY = [
    {id: "m1", counter: 1, totalNum: 5},
    {id : "m2", counter : 2, totalNum: 5}
]

const ShowStats = (props) => {
    const data = DUMMY;
    return data.map((stat) => {
        return <Stats key={stat.id} counter={stat.counter} totalNum={stat.totalNum}/>
    })
}

export default ShowStats;