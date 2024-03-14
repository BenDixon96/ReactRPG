import './Explore.css'
import currentLocation from './Nav_class/location';
import React, { useEffect, useState } from 'react';
import LoadArea from './LoadArea';
import levelOneAreas from './Nav_class/level-1-area/levelOneAreas';



const Explore = () => {
   
    const [count, setCount] = useState(0)
    const [myLocation, setMyLocation] = useState(new currentLocation(0, 0))
    const [area, setArea] = useState(null)
    const [blockedPath, setBlockedPath] = useState(null)
    

    const handleChange = () => {
   
    levelOneAreas.map((x) => myLocation.loadArea(x))
    setArea(myLocation.currentArea)


    }
    useEffect(() => {
        handleChange();
    }, []); 
    

    const handleClick = (direction, value) => {


        const lastArea = [myLocation.xAxis, myLocation.yAxis]
       
        myLocation.move(direction, value)
        levelOneAreas.map((x) => myLocation.loadArea(x))
        const canMove = levelOneAreas.map((x) => myLocation.loadArea(x))
        console.log("can Move is:", canMove)
        if (canMove.includes(true)){
            setMyLocation(myLocation)
            setArea(myLocation.currentArea)
            setCount(count + 1) 
            console.log(levelOneAreas) 
            setBlockedPath(null)

        }else{
            myLocation.updateLocation(lastArea[0], lastArea[1])
            console.log("not that way")
            setBlockedPath("your path is blocked")
        }

        
        
        
        setMyLocation(myLocation)
        setArea(myLocation.currentArea)
        setCount(count + 1)  
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
     
        
        <LoadArea x={myLocation.xAxis} y={myLocation.yAxis} loadedArea={area}/>
    </div>

    ) 
    
 



  };


  export default Explore