import { useState } from "react";

export default function Player({ initialName, symbol,isActive ,onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name,setName] = useState(initialName);
  function handleClick() {
    // setIsEditing((editing)=>!editing); -- Best Practice
    setIsEditing((editing)=>!editing);
    // setIsEditing(!isEditing); Not Recommneded - React schedules the state updaton so it is not instant
    if(isEditing) onChangeName(symbol,name);
  }

  function handleChange(event){
    setName(event.target.value);
  }
  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input type="text" required value={name} onChange={handleChange}/>}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEditing?'Save':'Edit'}</button>
      </span>
    </li>
  );
}
