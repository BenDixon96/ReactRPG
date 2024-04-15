import React, { useEffect, useState } from 'react';


const Inventory = (props) =>{
    const [showInventory, setShowInventory] = useState(false)
    const [playerData, setPlayerData] = useState(window.localStorage.getItem("player"))
    useEffect(() => {
        const storedPlayer = window.localStorage.getItem("player");
        
        if (storedPlayer) {
           
            const deserializedPlayer = JSON.parse(storedPlayer);
            setPlayerData(deserializedPlayer);
        }
    }, []);
    
 
const showInv = () =>{
    if(showInventory === false){
        setShowInventory(true)
        const storedPlayer = window.localStorage.getItem("player");
        const deserializedPlayer = JSON.parse(storedPlayer);
        setPlayerData(deserializedPlayer);
        

        console.log(playerData.inventory)

   

    }
    else{
        setShowInventory(false)
    }
   
    

}





    return(
        <div>
            <button onClick={showInv}> Inventory</button>

            {showInventory && props.player.name && 
                <div>{props.player.name}s stuff {playerData.inventory.map((item) => <p>{item}</p>)}</div>
                
                
                
            }
            


        </div>
    )
}

export default Inventory