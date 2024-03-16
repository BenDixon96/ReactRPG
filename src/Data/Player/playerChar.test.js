
const playerChar = require('../Player/playerChar')


describe('initalise a class', () => {
    it('checks if class is intalised', () => {
      const testPlayer = new playerChar("Bob")
      expect(testPlayer).toBeDefined();
      expect(testPlayer.name).toBe("Bob")
      expect(testPlayer.armour).toBe(null)
      expect(testPlayer.weapon).toBe(null)
      expect(testPlayer.inventory).toEqual([])

    });
  });

  describe('test to pick up item', () => {
    it('checks if class is intalised', () => {
      const testPlayer = new playerChar("Bob")
      const testItem1 = 'stuff'
      const testItem2 = 'more stuff'

      testPlayer.pickUp(testItem1)
      testPlayer.pickUp(testItem2)
      expect(testPlayer.inventory).toEqual(['stuff', 'more stuff'])

    });
  });

