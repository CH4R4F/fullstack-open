export const MostVoted = ({ anecdotes, votes }) => {
  let max = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <div>
        <p>{anecdotes[max]}</p>
        <p>has {votes[max]} votes</p>
      </div>
    </div>
  );
};
