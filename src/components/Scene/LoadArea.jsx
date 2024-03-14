
import React, { useEffect, useState } from 'react';
import levelOneAreas from './Nav_class/level-1-area/levelOneAreas';


const LoadArea = (props) => {
    const [area, setArea] = useState(props.loadedArea)
    
    const [x, setX] = useState(props.x)



  
    

  
    return(
        <div>
        <h1>Area  stateX{x} propsY{props.y} </h1>
        {props.loadedArea &&(
            <div>{props.loadedArea.name}</div>
        )}

      
    </div>

    ) 
    
 



  };


  export default LoadArea