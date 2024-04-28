
class Area{
    constructor(x, y, name, items = null){
        this.xAxis = x
        this.yAxis = y
        this.name = name
        this.explored = false
        this.items = items

    }
    pickUpItem(id){
        const newArray = this.items.filter(item =>item.id !== id)
        this.items = newArray
    }
}

export default Area
//module.exports = Area
