import { useState, useRef } from "react"
import ResultModal from "./ResultModal"



export default function TimeChallenge({title, targetTime}) {
    const timer = useRef()
    const dialog = useRef() 

    const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000)

    const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000
    

    if(timeRemaning <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }


    const handleReset = () => {
        setTimeRemaning(targetTime * 1000)
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaning(prev => {
                return prev - 100
            })
         }, 100)
    }


    const handleStop = () => {
        clearInterval(timer.current)
        dialog.current.open()
    }


    const mainSection = <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>

        <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>

        <p className={timerIsActive ? 'active': undefined}>
        {timerIsActive ? 'Timer is running' : 'Timer inactive'} Challenge
        </p>
    </section>

    return  <>
       <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaning} onReset={handleReset}/> 
       {mainSection} 
    </>
  
}