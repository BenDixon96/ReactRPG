const Area = require('./area')
const ConsumableItem = require('../items/itemConClass')


describe('creates area class', () =>{
    it('checks that class is intalised without a  item', () =>{
        const testArea = new Area(0, 0, "test")
        expect(testArea).toBeDefined()
        expect(testArea.xAxis).toBe(0)
        expect(testArea.yAxis).toBe(0)
        expect(testArea.name).toBe("test")
        expect(testArea.items).toBe(null)

    })
})
describe('creates area class', () =>{
    it('checks that class is intalised with an  item', () =>{
        const testItem = new ConsumableItem(1, 'testItem', 0)
        const testArea = new Area(0, 0, "test", [testItem])
        expect(testArea).toBeDefined()
        expect(testArea.xAxis).toBe(0)
        expect(testArea.yAxis).toBe(0)
        expect(testArea.name).toBe("test")
        expect(testArea.items[0]).toBeDefined()
        expect(testArea.items[0].name).toBe("testItem")


    })
})
describe('tests pickUp Function', () =>{
    it('tests that item is removed from area' , () =>{
        const testItem1 = new ConsumableItem(1, 'testItem1', 0)
        const testItem2 = new ConsumableItem(2, 'testItem2', 0)
        const testArea = new Area(0, 0, "test", [testItem1, testItem2])
        expect(testArea).toBeDefined()
        expect(testArea.xAxis).toBe(0)
        expect(testArea.yAxis).toBe(0)
        expect(testArea.name).toBe("test")
        expect(testArea.items[0]).toBeDefined()
        expect(testArea.items[0].name).toBe("testItem1")
        expect(testArea.items.length).toBe(2)
        testArea.pickUpItem(1)
        expect(testArea.items.length).toBe(1)

         

    })
})