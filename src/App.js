import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)
  const date = new Date()
  date.setDate(date.getDate() + count)
  function handleReset() {
    setCount(0)
    setStep(1)
  }
  return (
    <div className="App">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{`Step: ${step}`}</span>
      </div>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - step)}>
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((prevCount) => prevCount + step)}>
          +
        </button>
      </div>

      <p>
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  )
}

export default App
