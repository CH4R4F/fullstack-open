export const Button = ({ setRate, text }) => {
  return <button onClick={() => setRate((prev) => prev + 1)}>{text}</button>;
};
