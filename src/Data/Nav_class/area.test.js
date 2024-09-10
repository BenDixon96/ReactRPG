// const Area = require('./area')
// const ConsumableItem = require('../items/itemConClass')
import Area from './area'
import ConsumableItem from '../items/itemConClass'
describe('creates area class', () =>{
    it('checks that class is intalised without a  item', () =>{
        const testArea = new Area(1, 0, 0, "test")
        expect(testArea).toBeDefined()
        expect(testArea.id).toBe(1)

        expect(testArea.xAxis).toBe(0)
        expect(testArea.yAxis).toBe(0)
        expect(testArea.name).toBe("test")
        expect(testArea.items).toBe(null)

    })
})
describe('creates area class', () =>{
    it('checks that class is intalised with an  item', () =>{
        const testItem = new ConsumableItem(1, 1, 'testItem', 0)
        const testArea = new Area(1, 0, 0, "test", [testItem])
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
        const testItem1 = new ConsumableItem(1, 1, 'testItem1', 1)
        const testItem2 = new ConsumableItem(2, 2, 'testItem2', 2)
        const testArea = new Area(1, 0, 0, "test", [testItem1, testItem2])
        expect(testArea).toBeDefined()
        expect(testArea.xAxis).toBe(0)
        expect(testArea.yAxis).toBe(0)
        expect(testArea.name).toBe("test")
        expect(testArea.items[0]).toBeDefined()
        expect(testArea.items[0].name).toBe("testItem1")
        expect(testArea.items.length).toBe(2)
        testArea.pickUpItem(testItem1)
        testArea.pickUpItem(testItem2)

        expect(testArea.items.length).toBe(1)
        expect(testArea.items[0].amount).toBe(1)
        testArea.pickUpItem(testItem2)
        expect(testArea.items.length).toBe(0)
        const testItem3 = new ConsumableItem(3, 2, 'testItem3', 2)
        const testArea2 = new Area(1, 0, 0, "test2", [testItem3],)
        expect(testArea2.items.length).toBe(1)




         

    })
})