
class Area{
    constructor(x, y, name, items = null){
        this.xAxis = x
        this.yAxis = y
        this.name = name
        this.explored = false
        this.items = items

    }
}

export default Area
