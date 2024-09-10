
import React, { useEffect, useState, Component } from 'react';
import levelOneAreas from '../../Data/Nav_class/level-1-area/levelOneAreas'
import playerChar from '../../Data/Player/playerChar';
import Area from '../../Data/Nav_class/area';


const LoadArea = (props) => {
    const [area, setArea] = useState(null)
    const [playerData, setPlayerData] = useState(window.localStorage.getItem("player"))
    const [areaData, setAreaData] = useState(window.localStorage.getItem("areas"))
    const [areaItems, setAreaItems] = useState(null)
    const [count, setCount] = useState(0)
    // const [inventoryItemIds, setInventoryItemIds] = useState(null)

    
    
    useEffect(() => {
        const storedPlayer = window.localStorage.getItem("player");
        //const storedAreas = window.localStorage.getItem("areas");
      //   if (storedAreas) {
      //     const deserializedAreas = JSON.parse(storedAreas);
      //     console.log("stored Area", deserializedAreas[0]);
          
      // }

        
  

        if (storedPlayer) {
           
            const deserializedPlayer = JSON.parse(storedPlayer);
            console.log(deserializedPlayer.name)
            

     


            const itemIds = deserializedPlayer.inventory.map(item => item.id)
            // setInventoryItemIds(itemIds)

            

             if(props.loadedArea?.items){

              
            //const itemFilter = props.loadedArea.items.filter(item => !itemIds.includes(item.id) && item.amount != 1)

            setAreaItems(props.loadedArea.items)
           


             }else{
              setAreaItems(null)
             }
             
            
             setArea(props.loadedArea);

            setPlayerData(deserializedPlayer);
        }
      
       
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

        
       

        setCount(count + 1)
        console.log("area", props.loadedArea)

        const newArea = area
        const areaJson = JSON.parse(areaData)
        newArea.pickUpItem(item)
        const newAreasData = areaJson.filter(area => area.id != newArea.id)

        console.log(areaData)

        
        newAreasData.push(newArea)
        window.localStorage.setItem("areas", JSON.stringify(newAreasData))
        

        

        setArea(newArea)
        setAreaItems(newArea.items)
      
      
       
        


        




    }

    const item = "test Item"



  
    

  
    return(
        <div>
          <h1>Area  stateX{x} propsY{props.y} </h1>
          {props.loadedArea && (
            <div>{props.loadedArea.name}</div>
          )}
      
          {/* Conditional rendering for loadedArea.items */}
          {area && areaItems && areaItems.length > 0 && (
            <div>
                {areaItems.map(item =>  <button onClick={() => handleClick(item)} key={item.id}>{item.name} x {item.amount}</button>)}
                </div>
          )}
      
          {/* <button onClick={handleClick}>{item}</button> */}
          <h1>{playerData.name}</h1>
        </div>
      );
    
    
 



  };


  export default LoadArea