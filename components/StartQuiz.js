import ProblemList from "./problems/ProblemList";

const Data = [
    {id: "a1", name: "아", text: " ぁ"},
]
//여기서 getStaticProps를 통해 data 가져오기.
function StartQuiz(props) {
  return <ProblemList problems={Data} />;
}

function getStaticProps() {}

export default StartQuiz;
