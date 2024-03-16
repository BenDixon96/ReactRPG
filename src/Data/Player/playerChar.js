

class playerChar {
    constructor(name){
        this.name = name
        this.charClass = null
        this.inventory = []
        this.weapon = null
        this.armour = null
        
        

    }
    pickUp(item){
        this.inventory.push(item)
    }
    

}




module.exports = playerChar