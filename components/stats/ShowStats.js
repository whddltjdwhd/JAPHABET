import Stats from "./Stats";
import style from "./showStats.module.css"

const ShowStats = (props) => {
  const data = props.data;
  // console.log(data);
  return (
    <ul className={style.list}>
      {data.map((stat) => {
        return (
          <Stats
            key={stat.id}
            counter={stat.counter}
            totalNum={stat.totalNum}
          />
        );
      })}
    </ul>
  );
};

export default ShowStats;
