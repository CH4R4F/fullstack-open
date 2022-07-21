import { Part } from "./Part";

export const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts.part1.name} exercice={parts.part1.exercises} />
      <Part part={parts.part2.name} exercice={parts.part2.exercises} />
      <Part part={parts.part3.name} exercice={parts.part3.exercises} />
    </div>
  );
};
