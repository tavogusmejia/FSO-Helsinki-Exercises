import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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
      <p>Good = {good}</p>
      <p>Neutral = {neutral}</p>
      <p>Bad = {bad}</p>
    </div>
  )
}

export default App