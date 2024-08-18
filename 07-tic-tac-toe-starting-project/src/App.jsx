import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { useState } from "react"
import { GameOver } from "./components/GameOver";

const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
      currentPlayer = 'O';
    }

    return currentPlayer;
}

const PLAYERS = {
  X : 'Player 1',
  O: 'Player 2'
}

const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
]

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]


function deriveWinner(gameBoard, players) {
  let winner;
  for(const combo of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combo[0].row][combo[0].column]
    const secondSquare =  gameBoard[combo[1].row][combo[1].column]
    const thirdSquare =   gameBoard[combo[2].row][combo[2].column]

    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
       winner = players[firstSquare];
    }
  }

  return winner;
}

function deriveGameBoard() {
      // derive state from app component
      let gameBoard = [...INITIAL_GAME_BOARD].map(array=> [...array]);

      for(const turn of gameTurns) {
          const {square, player} = turn;
          const {row, col} = square;
  
          gameBoard[row][col] = player;
      }
      
      return gameBoard;
  
}

function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([]);

  // derived state
  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard();
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  // State
  const handleSelectedBox = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => {
      const updatedTurns = [
        {square : {row: rowIndex, col : colIndex}, player: deriveActivePlayer(prevTurns)},
         ...prevTurns
        ];

      return updatedTurns;
    });
  }

  const handleSaveNames = (symbol, newName) => {
    setPlayers((oldPlayers) => {
      return {
        ...oldPlayers,
        [symbol]: newName
      }
    })
  }

  // Outputs
  const handleRematch = () => {
    setGameTurns([])
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName={PLAYERS.X} symbol="X" isActive={currentPlayer === 'X'} saveName={handleSaveNames}/>
        <Player initialName={PLAYERS.O} symbol="Y" isActive={currentPlayer === 'O'} saveName={handleSaveNames}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} again={handleRematch}/>}
      <GameBoard gameBoard={gameBoard} onSelectBlock={handleSelectedBox}/>
    </div>
    <Log turns={gameTurns}/>
  </main> 
}

export default App
