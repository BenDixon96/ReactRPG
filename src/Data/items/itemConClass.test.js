// const ConsumableItem = require("./itemConClass")
import ConsumableItem from "./itemConClass"

describe('checks that class is intailised', () =>{
    it('checks the cosumable item is working', () =>{
    const testItem = new ConsumableItem(1, 2, "test", 1)
    expect(testItem).toBeDefined()
    expect(testItem.id).toBe(1)
    expect(testItem.name).toBe("test")
    expect(testItem.amount).toBe(1)


    })
    
})
