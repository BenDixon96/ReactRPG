

class currentLocation {
    constructor(x, y){
        this.xAxis = 0
        this.yAxis = 0
        this.currentArea = null
    }
    updateLocation(xAxis, yAxis){
        this.xAxis = xAxis
        this.yAxis = yAxis
    }
    move(direction, movement){
        
        if(direction === "S"){
            this.yAxis -= 1
            console.log('south')
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
        loadArea(area){
            if(area.xAxis === this.xAxis && this.yAxis === area.yAxis){
                this.currentArea = area
                
                if(area.explored === false){
                    console.log("new area")
                    area.explored = true

                }
               
               
                return true
            }
            else{
                return false
            }
        }
       
    }





export default currentLocation