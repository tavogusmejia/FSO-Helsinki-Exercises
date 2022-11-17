const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
    <Header course={course}/>
    <Content part={parts[0].name} exercises={parts[0].exercises}/>
    <Content part={parts[1].name} exercises={parts[1].exercises}/>
    <Content part={parts[2].name} exercises={parts[2].exercises}/>
    <Total total={parts[0].exercises+parts[1].exercises+parts[2].exercises}/>  ...
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