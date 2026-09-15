
import React, { useState, useEffect } from 'react'
import './Timer.css'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timer

    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [running])

  const resetTimer = () => {
    setSeconds(0)
    setRunning(false)
  }

  return (
    <div className="App">
      <h1 className='timer-title'>Timer</h1>

      <h2 className='sec'>{seconds} seconds</h2>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => setRunning(false)}>
        Stop
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  )
}

export default Timer
