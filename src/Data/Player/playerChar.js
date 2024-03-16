

class playerChar {
    constructor(name){
        this.name = name
        this.charClass = null
        this.inventory = []
        this.weapon = null
        this.armour = null
        this.level = 1
        this.xp = 0
        
        

    }
    pickUp(item){
        this.inventory.push(item)
    }
    equipWeapon(weapon){
        this.weapon = weapon
    }
    equipArmour(armour){
        this.armour = armour
    }
    tillLevel(){
        const requiredXP = this.level * 100

        return requiredXP - this.xp
    }
    addXp(xp){
        this.xp += xp
        this.levelUp()
    }
    levelUp(){
        const requiredXP = this.level * 100
        if(this.xp >= this.tillLevel()){
            
            const remainderXP = this.xp - requiredXP
            this.level += 1
            this.xp = remainderXP
            
        }
    }

}




module.exports = playerChar