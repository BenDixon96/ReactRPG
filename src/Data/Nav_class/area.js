
class Area{
    constructor(x, y, name, items = null){
        this.xAxis = x
        this.yAxis = y
        this.name = name
        this.explored = false
        this.items = items
        //this.isLooted = False

    }
    pickUpItem(pickUpItem){
        const names = this.items.map(item => item.name)
        console.log(this.items)
        if(!names.includes(pickUpItem.name)){
            //const newArray = this.items.filter(item =>item.id !== pickUpItem.id)
            this.items.push(pickUpItem)


            
            

        }else{
            this.items.forEach(item => {
                if(item.name === pickUpItem.name){
                    item.amount += 1;
                }
                
            });
        }
       
        
    }
}

export default Area
//module.exports = Area
