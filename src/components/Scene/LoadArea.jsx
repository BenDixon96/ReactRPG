
import React, { useEffect, useState } from 'react';
import levelOneAreas from './Nav_class/level-1-area/levelOneAreas';


const LoadArea = (props) => {
    const [myLocation, setMyLocation] = useState(props.myLocation)
    
    
    const [x, setX] = useState(props.x)



  
    

  
    return(
        <div>
        <h1>Area  stateX{x} propsY{props.y} </h1>
        {myLocation &&(
            <div>{myLocation.name}</div>
        )}

      
    </div>

    ) 
    
 



  };


  export default LoadArea