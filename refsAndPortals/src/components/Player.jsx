import { useState, useRef } from "react";

export default function Player() {
  const nameInput = useRef();

  //const [enteredPlayerName, setEnteredPlayerName] = useState('')

  const handleClick = (event) => {
  //  setEnteredPlayerName(nameInput.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {nameInput?.current?.value || 'unknown entity'}</h2>
      <p>
        <input ref={nameInput} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
