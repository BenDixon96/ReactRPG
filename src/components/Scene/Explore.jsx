import './Explore.css'
import currentLocation from './Nav_class/location';
import React, { useEffect, useState } from 'react';



const Explore = () => {
   
    const [count, setCount] = useState(0)
    const [myLocation, setMyLocation] = useState(new currentLocation(0, 0))
    
    
    const handleClick = (direction, value) => {
       
        myLocation.move(direction, value)
        setMyLocation(myLocation)
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
    </div>

    ) 
    
 



  };


  export default Explore