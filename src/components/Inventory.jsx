import React, { useEffect, useState } from 'react';


const Inventory = (props) =>{
    const [showInventory, setShowInventory] = useState(false)
    
 
const showInv = () =>{
    if(showInventory === false){
        setShowInventory(true)
        console.log(props.player)
   

    }
    else{
        setShowInventory(false)
    }
   
    

}





    return(
        <div>
            <button onClick={showInv}> Inventory</button>

            {showInventory && props.player.name && 
                <h2>{props.player.name}s stuff </h2>
            }
            


        </div>
    )
}

export default Inventory