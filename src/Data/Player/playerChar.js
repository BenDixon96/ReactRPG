//const PlayerData = require("./playerData")
import PlayerData from "./playerData"
import ConsumableItem from "../items/itemConClass"


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
        const itemNames = this.inventory.map(item => item.name)
        if(itemNames.includes(item.name)){
            this.inventory.forEach(charItem => {
                if(item.name === charItem.name){
                    charItem.amount += 1
                    console.log("item ammount", item.amount)
                }
                
            });

        }else{
            const newItem = new ConsumableItem(item.id, item.typeId, item.name, 1)
            

            this.inventory.push(newItem)

        }

        
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
    loadData(data){
        this.name = data.name
        this.charClass = data.charClass
        this.inventory = data.inventory
        this.weapon = data.weapon
        this.armour = data.armour
        this.level = data.level
        this.xp = data.xp
        this.maxHp = data.maxHp
        this.hp = data.hp
        this.dead = data.dead


    }

}



// use for tests

//module.exports = playerChar;



export default playerChar