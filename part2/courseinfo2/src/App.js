const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
console.log(<p>{course.parts.map(parts => <p key={parts.id}>{parts.name}{parts.exercises}</p>)}</p>);
  return <Course course={course} />
}

export default App

const Course = (props) =>{
  const {course}=props
  return(
    <div>
    <Header key={course.id} course={course.name}/>
    <Content />
    </div>  
  )
}

  const Header = (props) => (
    <h1 >{props.course}</h1>
  )
  
  const Content = (props) => {
    const {course}=props
    
  //   return(
  //   <Part part={course.parts.name} exercises={course.parts.exercises}/>
  // )
}


  
  const Part = (props) => {
    const {course}=props
    return(
      <p>{course.parts.map(parts => <p key={parts.id}>{parts.name}{parts.exercises}</p>)}</p>
      )
  }
  
