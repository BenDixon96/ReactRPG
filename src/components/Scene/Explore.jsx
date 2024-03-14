import './Explore.css'
import currentLocation from './Nav_class/location';
import React, { useEffect, useState } from 'react';
import LoadArea from './LoadArea';
import levelOneAreas from './Nav_class/level-1-area/levelOneAreas';


const Explore = () => {
   
    const [count, setCount] = useState(0)
    const [myLocation, setMyLocation] = useState(new currentLocation(0, 0))
    const [area, setArea] = useState(null)
    
    
    const handleClick = (direction, value) => {
       
        myLocation.move(direction, value)
        levelOneAreas.map((x) => myLocation.loadArea(x))

        
        
        
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
        {area &&(
            <div>{area.name}</div>
        )}
        
        <LoadArea x={myLocation.xAxis} y={myLocation.yAxis} myLocation={area}/>
    </div>

    ) 
    
 



  };


  export default Explore