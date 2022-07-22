import { useState } from "react";
import { Button } from "./components/Button";
import { StatisticLine } from "./components/StatisticLine";
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text="good" setRate={setGood} />
        <Button text="neutral" setRate={setNeutral} />
        <Button text="bad" setRate={setBad} />
      </div>
      <h1>Statistics</h1>
      {good + neutral + bad > 0 ? (
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text="positive" value={(good / (good + neutral + bad)) * 100 + ' %'} />{" "}
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
