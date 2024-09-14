import React, { useEffect, useState } from 'react';
import playerChar from '../Data/Player/playerChar';
import levelOneAreas from '../Data/Nav_class/level-1-area/levelOneAreas';


const CharacterCreate = () =>{
    const [playerName, setPlayerName] = useState("")
    const [player, setPlayer] = useState(null)

    
    const handleChange = (event)=>{
        setPlayerName(event.target.value)
        
       
      }
      const handleSubmit = (event) =>{
        const playerCharater = new playerChar(playerName)
        setPlayer(playerCharater)
        window.localStorage.setItem("player", JSON.stringify(playerCharater))
        window.localStorage.setItem("areas", JSON.stringify(levelOneAreas))
        location.reload()
      }

    return(
        <form className='char-create' onSubmit={handleSubmit}> 
        <div className="char-name">
      <input 
        type="text" 
        className="search-field" 
        placeholder={"name"}
        value={playerName}
        onChange={handleChange}

       
      />
      <button type="submit">submit name</button>
    </div>
    </form>
        
    )
        
    
}



export default CharacterCreate
