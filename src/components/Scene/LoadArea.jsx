
import React, { useEffect, useState } from 'react';
import levelOneAreas from '../../Data/Nav_class/level-1-area/levelOneAreas'
import playerChar from '../../Data/Player/playerChar';


const LoadArea = (props) => {
    const [area, setArea] = useState(props.loadedArea)
    const [playerData, setPlayerData] = useState(window.localStorage.getItem("player"))
    useEffect(() => {
        const storedPlayer = window.localStorage.getItem("player");
        
        if (storedPlayer) {
           
            const deserializedPlayer = JSON.parse(storedPlayer);
            setPlayerData(deserializedPlayer);
        }
    }, []);
    
    const [x, setX] = useState(props.x)
    const handleClick = () =>{
        console.log("click")
        
        const player = new playerChar(playerData.name)
        player.loadData(playerData)
        console.log("player", player)
        console.log("storedPlayer", playerData)
        console.log("storedPlayer inventor", playerData.inventory)

        player.pickUp("test")
        const modPlayerData = player.toData()
        window.localStorage.setItem("player", JSON.stringify(player))
        //location.reload()




    }

    const item = "test Item"



  
    

  
    return(
        <div>
        <h1>Area  stateX{x} propsY{props.y} </h1>
        {props.loadedArea &&(
            <div>{props.loadedArea.name}</div>
            
        )}
        <button onClick={handleClick}>{item} </button>
        <h1>{playerData.name}</h1>

      
    </div>

    ) 
    
 



  };


  export default LoadArea