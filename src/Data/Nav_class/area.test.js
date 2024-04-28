const Area = require('./area')


describe('creates area class', () =>{
    it('checks that class is intalised without a  item', () =>{
        const testArea = new Area(0, 0, "test")
        expect(testArea).toBeDefined() 
    })
})