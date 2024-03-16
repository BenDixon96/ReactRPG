import React, { useEffect, useState } from 'react';
import playerChar from '../Data/Player/playerChar'


const CharacterCreate = () =>{
    const [playerName, setPlayerName] = useState("")
    const [player, setPlayer] = useState(null)

    
    const handleChange = (event)=>{
        setPlayerName(event.target.value)
        
       
      }
      const handleSubmit = (event) =>{
        event.preventDefault()
        const playerCharater = new playerChar(playerName)
        setPlayer(playerCharater)
        //console.log(playerCharater)
        window.localStorage.setItem("player", JSON.stringify(playerCharater))
        console.log(window.localStorage.getItem("player"))
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
