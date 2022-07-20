import { Part } from "./Part";

export const Content = ({ parts, exercises }) => {
  return (
    <div>
      <Part part={parts.part1} exercice={exercises.exercises1} />
      <Part part={parts.part2} exercice={exercises.exercises2} />
      <Part part={parts.part3} exercice={exercises.exercises3} />
    </div>
  );
};
