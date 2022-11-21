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

export default Courses;
