import Stats from "./Stats";
import style from "./showStats.module.css";

const ShowStats = (props) => {
  const data = props.data;
  return (
    <ul className={style.list}>
      {data.map((stat) => {
        return (
          <Stats
            key={stat._id}
            counter={stat.counter}
            totalNum={stat.totalNum}
            time={stat.time}
          />
        );
      })}
    </ul>
  );
};

export default ShowStats;
