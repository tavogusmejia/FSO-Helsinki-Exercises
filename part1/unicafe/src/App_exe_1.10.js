import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = ({text, value}) =>(
  <>{text} = {value}</>
  )
  
  const Statistics = ({good, neutral, bad}) =>{
    
    if(good+neutral+bad===0){
      return (<p>No feedback given yet!</p>)
    }
  
    if(good>bad && good>neutral){
    var overall = "Good"
    }
    if((neutral>=good) && (neutral>=bad)){
      overall = "Neutral"
    }
    if((bad>good) && (bad>=neutral)){
      overall = "Bad"
    }
    
    var all = good+neutral+bad
    var average = (good*10+neutral*5+bad*1)/
    (good+bad+neutral)
  
    return (
    <div>
    <StatisticsLine text="Good" value={good}/><br></br>
    <StatisticsLine text="Neutral" value={neutral}/><br></br>
    <StatisticsLine text="Bad" value={bad}/><br></br>
    <p><StatisticsLine text="All" value={all}/></p>
    <p><StatisticsLine text="Average" value={average}/> (10: Good - 1: Bad)</p>
    <p><StatisticsLine text="Overall" value={overall}/></p>
    </div>
    )
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButtonClick = () => {
    setGood(good + 1)
  }

  const handleNeutralButtonClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadButtonClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={handleGoodButtonClick} text="Good"/>
      <Button handleClick={handleNeutralButtonClick} text="Neutral"/>
      <Button handleClick={handleBadButtonClick} text="Bad"/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App