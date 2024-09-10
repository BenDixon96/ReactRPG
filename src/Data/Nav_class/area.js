
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
        this.items.forEach(item => {
            if(pickUpItem.name === item.name){
                if(item.amount === 1){
                    const newArray = this.items.filter(item =>item.id !== pickUpItem.id)
                    this.items = newArray
                    

                }
                else if(item.amount > 1){
                    item.amount -= 1

                }
                
            }
            
        });
        // if(!names.includes(pickUpItem.name)){
        //     const newArray = this.items.filter(item =>item.id !== pickUpItem.id)
        //     this.items = newArray


            
            

        // }else{
        //     this.items.forEach(item => {
        //         if(item.name === pickUpItem.name){
        //             item.amount -= 1;
        //         }
                
        //     });
        // }
       
        
    }
}

export default Area
//module.exports = Area
