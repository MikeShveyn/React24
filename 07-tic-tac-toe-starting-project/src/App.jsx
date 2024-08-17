import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { useState } from "react"
function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
    
  const handleActivePlayer = () => {
    setCurrentPlayer((prevAcPlayer) => {
      return prevAcPlayer === 'X' ? 'O' : 'X'
    })
    setGameTurns();
  }

  return <main>

    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={currentPlayer === 'X'}/>
        <Player initialName="Player 2" symbol="Y" isActive={currentPlayer === 'O'}/>
      </ol>
      <GameBoard activePlayerSymbol={currentPlayer}  onSelectBlock={handleActivePlayer}/>
    </div>
    <Log />
  </main> 
}

export default App
