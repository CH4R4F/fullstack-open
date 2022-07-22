import { useState } from "react";
import { Button } from "./components/Button";
import { Statistics } from "./components/Statistics";

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
