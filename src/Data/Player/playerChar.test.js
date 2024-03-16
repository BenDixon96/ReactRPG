
const playerChar = require('../Player/playerChar')


describe('initalise a class', () => {
    it('checks if class is intalised', () => {
      const testPlayer = new playerChar("Bob")
      expect(testPlayer).toBeDefined();
      expect(testPlayer.name).toBe("Bob")
    });
  });