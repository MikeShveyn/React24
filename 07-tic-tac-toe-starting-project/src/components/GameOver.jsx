export function GameOver({winner, again}) {
    return <div id="game-over">
        <h2>Game Over</h2>
        {winner ?  <p>{winner} won !</p> : <p>Draw ;</p>}
        <p><button onClick={again}>Rematch!</button></p>
    </div>
}