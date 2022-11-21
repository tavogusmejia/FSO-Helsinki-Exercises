const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;

const Course = ({ course }) => (
  <div>
    <Header key={course.id} course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
);

const Header = ({ course }) => <h1>{course.name}</h1>;

const Content = ({ course }) => (
  <>
    {course.parts.map((courseParts) => (
      <p key={courseParts.id}>
        {courseParts.name} {courseParts.exercises}
      </p>
    ))}
  </>
);

const Total = ({ course }) => (
  <p>
    <strong>
      Total of{" "}
      {course.parts
        .map((courseParts) => courseParts.exercises)
        .reduce((partialSum, a) => partialSum + a, 0)}{" "}
      exercises
    </strong>
  </p>
);
