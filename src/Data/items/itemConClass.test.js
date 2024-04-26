const ConsumableItem = require("./itemConClass")

describe('checks that class is intailised', () =>{
    it('checks the cosumable item is working', () =>{
    const testItem = new ConsumableItem(1, "test", 2)
    expect(testItem).toBeDefined()
    expect(testItem.id).toBe(1)
    expect(testItem.name).toBe("test")
    expect(testItem.effect).toBe(2)


    })
    
})
