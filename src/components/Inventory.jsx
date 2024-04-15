import React, { useEffect, useState } from 'react';


const Inventory = (props) =>{
    const [showInventory, setShowInventory] = useState(false)
    
 
const showInv = () =>{
    if(showInventory === false){
        setShowInventory(true)
        console.log(props.player.inventory)

   

    }
    else{
        setShowInventory(false)
    }
   
    

}





    return(
        <div>
            <button onClick={showInv}> Inventory</button>

            {showInventory && props.player.name && 
                <div>{props.player.name}s stuff {props.player.inventory.map((item) => <h1>{item}</h1>)}</div>
                
                
                
            }
            


        </div>
    )
}

export default Inventory