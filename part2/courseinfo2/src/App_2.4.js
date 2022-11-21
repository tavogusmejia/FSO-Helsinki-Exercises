const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <Courses courses={courses} />
    </div>
  );
};

export default App;

const Courses = ({ courses }) => {
  var courseContent = [];

  for (let i = 0; i < courses.length; i++) {
    courseContent.push(<h2 key={courses[i].id}>{courses[i].name}</h2>);

    var totalExercises = 0;
    for (let j = 0; j < courses[i].parts.length; j++) {
      courseContent.push(
        <p key={courses[i].name + courses[i].parts[j].id}>
          {courses[i].parts[j].name} {courses[i].parts[j].exercises}
        </p>
      );
      totalExercises += courses[i].parts[j].exercises;
    }
    courseContent.push(
      <p key={"total" + courses[i].id}>
        <strong>Total of {totalExercises} exercises</strong>
      </p>
    );
  }
  return courseContent;
};
