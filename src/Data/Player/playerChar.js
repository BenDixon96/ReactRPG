const PlayerData = require("./playerData")



class playerChar {
    constructor(name){
        this.name = name
        this.charClass = null
        this.inventory = []
        this.weapon = null
        this.armour = null
        this.level = 1
        this.xp = 0
        this.maxHp = 14
        this.hp = 14
        this.dead = false

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
        
        if(this.xp >= this.level * 100){
            while(this.xp >= this.level * 100){
            this.xp -= this.level * 100
            this.level += 1
            this.maxHp = this.getMaxHp()
            }
            
            
        }
        }
        getMaxHp(){
            return this.level * 4 + 10
    }
    takeDamage(damage){
        this.hp -= damage
        if(this.hp <= 0){
            this.dead = true
        }
    }
    heal(healingPoints){
        this.hp += healingPoints
        if(this.hp > this.getMaxHp()){
            this.hp = this.getMaxHp()
        }
    }
    toData(){
        const data = new PlayerData(this.name, this.charClass, this.inventory, this.weapon, this.armour, this.level, this.xp, this.maxHp, this.hp, this.dead)
        return data
    }

}



// use for tests

module.exports = playerChar;



//export default playerChar