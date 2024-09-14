import './Explore.css'
import currentLocation from '../../Data/Nav_class/location';
import React, { useEffect, useState } from 'react';
import LoadArea from './LoadArea';
import Area from '../../Data/Nav_class/area';



const Explore = () => {
    const [myLocation, setMyLocation] = useState(new currentLocation(0, 0))
    const [area, setArea] = useState(null)
    const [blockedPath, setBlockedPath] = useState(null)
    const [areaItems, setAreaItems] = useState(null)

    const [levelAreas, setLevelAreas] = useState(null)
    useEffect(() => {
        const storedAreas = window.localStorage.getItem("areas");
        if(storedAreas){
            const deserializedAreas = JSON.parse(storedAreas);
            const levelAreas = deserializedAreas.map(area => new Area(area.id, area.xAxis, area.yAxis, area.name, area.items))
            setLevelAreas(levelAreas)
            levelAreas.map((x) => myLocation.loadArea(x))
            setArea(myLocation.currentArea)
        }
    
    }, []); 
    

    const handleClick = (direction, value) => {


        const lastArea = [myLocation.xAxis, myLocation.yAxis]
       
        myLocation.move(direction, value)
        levelAreas.map((x) => myLocation.loadArea(x))
        const canMove = levelAreas.map((x) => myLocation.loadArea(x))
        console.log("can Move is:", canMove)
        if (canMove.includes(true)){
            setMyLocation(myLocation)
            setArea(myLocation.currentArea)
            setBlockedPath(null)

            if(area.items){
                if(area.items.length > 0){
                    setAreaItems(area.items)
    
                }
    

            }
           
        }
       
        else{
            myLocation.updateLocation(lastArea[0], lastArea[1])
            console.log("not that way")
            setBlockedPath("your path is blocked")
        }   
        setMyLocation(myLocation)
        setArea(myLocation.currentArea) 
    }

    





    return(
        <div id="control">
        <h1>Explore </h1>
      
        <p> your location ({myLocation.xAxis}) ({myLocation.yAxis}) </p>
        <button id="N" onClick={() => handleClick('N', 1)}>
            north
        </button>
        <button id="E" onClick={() => handleClick('E', -1)}>
            east
        </button>
        <button id="S" onClick={() => handleClick('S', -1)}>
            south
        </button>
        <button id="W" onClick={() => handleClick('W', -1)}>
            west
        </button>
        {blockedPath &&(
            <div>{blockedPath}</div>
        )}
        
     
        
        <LoadArea x={myLocation.xAxis} y={myLocation.yAxis} loadedArea={area} areaItems={areaItems}/>
    </div>

    ) 
    
 



  };


  export default Explore