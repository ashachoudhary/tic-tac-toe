import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  // this state is for button save or edit, when editing input shows
  const [isEditing, setIsEditing] = useState(false);
  // this state is used for name change, when user edits it should save the new name
  const [playerName, setPlayerName] = useState(initialName);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
// to capture new name and set it 
  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
