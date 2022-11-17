const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
    <Header course={course}/>
    <Content part={part1.name} exercises={part1.exercises}/>
    <Content part={part2.name} exercises={part2.exercises}/>
    <Content part={part3.name} exercises={part3.exercises}/>
    <Total total={part1.exercises+part2.exercises+part3.exercises}/>  ...
    </div>
  )
}

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <p>{props.part} {props.exercises}</p>
)

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
)

export default App