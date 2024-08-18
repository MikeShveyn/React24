import { useState } from "react";

export default function Player({initialName, symbol, isActive, saveName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing((oldEditing) => !oldEditing)
        if(isEditing) {
            saveName(symbol, playerName);
        }
    }

    const handleInputChange = (e) => {
        setPlayerName(e.target.value)
    }

    let editableName =  <span className="player-name">{playerName}</span>

    if(isEditing) {
        editableName =  <input type="text" required value={playerName} onChange={handleInputChange}/>
    }

    return  <li className={isActive ? 'active' : undefined}>
    <span className="player">
      {editableName}
      <span className="player-symbol">{symbol}</span>
    </span>
   <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
}