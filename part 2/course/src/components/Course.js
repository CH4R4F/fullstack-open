import { Header } from "./Header";
import { Part } from "./Part";

export const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <ul style={{ listStyle: "none" }}>
        {course.parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
        <li>
          <b>total of {course.parts.reduce((acc, curr) => acc + curr.exercises, 0)} exercises</b>
        </li>
      </ul>
    </div>
  );
};
