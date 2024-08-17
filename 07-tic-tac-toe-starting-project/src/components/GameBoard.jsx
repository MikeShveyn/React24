import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onSelectBlock}) {
   
    return (
        <ol id="game-board">
           {gameBoard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => {
                            return <li key={colIndex}>
                                <button onClick={() => handleBlock(rowIndex, colIndex)}>{col}</button>
                            </li>
                        })}
                    </ol>
                </li>
           })}
        </ol>
    )
  
}