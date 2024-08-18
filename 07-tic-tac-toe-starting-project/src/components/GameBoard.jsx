
export default function GameBoard({gameBoard, onSelectBlock}) {


    return (
        <ol id="game-board">
           {gameBoard.map((row, rowIndex) => {
                return <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => {
                            return <li key={colIndex}>
                                <button disabled={playerSymbol}
                                 onClick={() => onSelectBlock(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        })}
                    </ol>
                </li>
           })}
        </ol>
    )
  
}