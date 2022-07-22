export const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  if(!good && !neutral && !bad) {
    return (
      <p>Ne feedback given</p>
    )
  }
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {good / total}</p>
    </div>
  );
};
