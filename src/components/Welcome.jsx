import Explore from "./Scene/Explore";
import React, { useEffect, useState } from 'react';
import CharacterCreate from "./character-create";
const Welcome = () => {
  const [player, setPlayer] = useState(window.localStorage.getItem("player"))

  useEffect(() => {
    const storedPlayer = window.localStorage.getItem("player");
    if (storedPlayer) {
        // Deserialize the stored data
        const deserializedPlayer = JSON.parse(storedPlayer);
        setPlayer(deserializedPlayer);
    }
}, []);




    return(
      

    
    <div>
      {!player &&(
        <CharacterCreate/>

      )}
       

    {player &&(
      <div>
      <h1>name {player.name}</h1>
      <Explore/>
      </div>

    )}
    
    

    </div>
    )
  };
  
  export default Welcome;