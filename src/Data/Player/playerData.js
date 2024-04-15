

class PlayerData{
    constructor(name, charClass, inventory,weapon, armour, level,
        xp, maxHp, hp, dead){
        this.name = name
        this.charClass = charClass
        this.inventory = inventory
        this.weapon = weapon
        this.armour = armour
        this.level = level
        this.xp = xp
        this.maxHp = maxHp
        this.hp = hp
        this.dead = dead

    }
        

}
//module.exports = PlayerData

export default PlayerData