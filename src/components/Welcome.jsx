import Explore from "./Scene/Explore";
import React, { useEffect, useState } from 'react';
import CharacterCreate from "./character-create";
import Inventory from "./Inventory";
const Welcome = () => {
  const [player, setPlayer] = useState(window.localStorage.getItem("player"))

  useEffect(() => {
    const storedPlayer = window.localStorage.getItem("player");
    if (storedPlayer) {
       
        const deserializedPlayer = JSON.parse(storedPlayer);
        setPlayer(deserializedPlayer);
    }
}, []);
    const handleClick = () =>{
      localStorage.removeItem("player")
      location.reload()

    }




    return(
      

    
    <div>
      <button onClick={handleClick}>quit game</button>
      {!player &&(
        <div>
        <CharacterCreate/>
        
        </div>

      )}
       

    {player &&(
      <div>
      <h1>name {player.name}</h1>
      <Inventory/>
      <Explore/>
      </div>

    )}
    

    

    </div>
    )
  };
  
  export default Welcome;