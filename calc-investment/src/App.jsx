import Header from './components/Header'
import Result from './components/Result'
import UserInput from './components/UserInput'
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({initialInvestment : 1000, annualInvestment: 1000, expectedReturn: 4, duration: 5})

  const handleChange = (id, newValue) => {
    setUserInput(prevUserInput => {
       return {
        ...prevUserInput,
        [id]: +newValue
       }
    })
}

const isValid = userInput.duration >= 1;
   
  return (
    <>
        <Header/>
        <UserInput onChangeInput={handleChange} userInput={userInput}/>
        {isValid && <Result input={userInput}/>}
        {!isValid && <p className='center'>Please enter valid input</p>}
    </>

  )
}

export default App
