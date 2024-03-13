

class currentLocation {
    constructor(x, y){
        this.xAxis = 0
        this.yAxis = 0
    }
    updateLocation(xAxis, yAxis){
        this.xAxis = xAxis
        this.yAxis = yAxis
    }
    move(direction, movement){
        if(direction === "S"){
            
            console.log(this.yAxis)
            this.yAxis -= 1
            console.log('south')
            console.log(this.yAxis)
            console.log(movement)  
        }
        else if( direction === "N"){
            console.log("north")
            this.yAxis += 1
        }

        else if( direction === "W"){
            console.log("west")
            this.xAxis -= 1
        }
        else if( direction === "E"){
            console.log("east")
            this.xAxis += 1
        } 
        }
    }





export default currentLocation