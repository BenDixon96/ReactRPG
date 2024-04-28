
import React, { useEffect, useState, Component } from 'react';
import levelOneAreas from '../../Data/Nav_class/level-1-area/levelOneAreas'
import playerChar from '../../Data/Player/playerChar';


const LoadArea = (props) => {
    const [area, setArea] = useState(props.loadedArea)
    const [playerData, setPlayerData] = useState(window.localStorage.getItem("player"))
    const [areaItems, setAreaItems] = useState(props.areaItems)
    const [count, setCount] = useState(0)
    
    
    useEffect(() => {
        const storedPlayer = window.localStorage.getItem("player");
        
        
        
        if (storedPlayer) {
           
            const deserializedPlayer = JSON.parse(storedPlayer);
            setPlayerData(deserializedPlayer);
        }
        setArea(props.loadedArea);
       
    }, [props.loadedArea]);
    
    const [x, setX] = useState(props.x)
    const handleClick = (item, event) =>{
        
        console.log("click")
        console.log(item)
        
        const player = new playerChar(playerData.name)
        player.loadData(playerData)
        
        

        player.pickUp(item)
        const modPlayerData = player.toData()
        window.localStorage.setItem("player", JSON.stringify(modPlayerData))
       
        props.loadedArea.pickUpItem(item)
        setCount(count + 1)
        console.log("area", props.loadedArea)
        const newArea = area
        newArea.pickUpItem(item.id)
        

        

        setArea(newArea)
        


        




    }

    const item = "test Item"



  
    

  
    return(
        <div>
          <h1>Area  stateX{x} propsY{props.y} </h1>
          {props.loadedArea && (
            <div>{props.loadedArea.name}</div>
          )}
      
          {/* Conditional rendering for loadedArea.items */}
          {area && area.items && area.items.length > 0 && (
            <div>
                {area.items.map(item => <button onClick={() => handleClick(item)} key={item.id}>{item.name}</button>)}
                </div>
          )}
      
          {/* <button onClick={handleClick}>{item}</button> */}
          <h1>{playerData.name}</h1>
        </div>
      );
    
    
 



  };


  export default LoadArea