import React, { useEffect, useState } from 'react';


const Inventory = (props) =>{
    const [showInventory, setShowInventory] = useState(false)
    const [playerData, setPlayerData] = useState(null)
    const [weapons, setWeapons] = useState(null)
    const [conItems, setConitems] = useState(null)

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
      
        
        const myWeapons = deserializedPlayer.inventory.filter(item => item.typeId === 2);
        const myConItems = deserializedPlayer.inventory.filter(item => item.typeId === 1);
        console.log(myWeapons)
        setWeapons(myWeapons);
        setConitems(myConItems);
     

        

   

    }
    else{
        setShowInventory(false)
    }


 
   
    

}





    return(
        <div>
            <button onClick={showInv}> Inventory</button>

            {showInventory && conItems && 
                <div>{props.player.name}s stuff {conItems.map((item) => <p key={item.id}>{item.name} x {item.amount}</p>)}</div>
                
                
                
            }
             {showInventory && weapons && 
                <div>{props.player.name}s weapons {weapons.map((item) => <p key={item.id}>{item.name} x {item.amount}</p>)}</div>
                
                
                
            }

            


        </div>
    )
}

export default Inventory