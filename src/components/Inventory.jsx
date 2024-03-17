import React, { useEffect, useState } from 'react';


const Inventory = () =>{
    const [showInventory, setShowInventory] = useState(false)
 
const showInv = () =>{
    if(showInventory === false){
        setShowInventory(true)
   

    }
    else{
        setShowInventory(false)
    }
   
    

}





    return(
        <div>
            <button onClick={showInv}> Inventory</button>

            {showInventory && 
                <h2>stuff</h2>
            }
            


        </div>
    )
}

export default Inventory