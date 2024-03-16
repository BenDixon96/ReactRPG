
const playerChar = require('../Player/playerChar')


describe('initalise a class', () => {
    it('checks if class is intalised', () => {
      const testPlayer = new playerChar("Bob")
      expect(testPlayer).toBeDefined();
      expect(testPlayer.name).toBe("Bob")
      expect(testPlayer.armour).toBe(null)
      expect(testPlayer.weapon).toBe(null)
      expect(testPlayer.inventory).toEqual([])
      expect(testPlayer.level).toBe(1)
      expect(testPlayer.xp).toBe(0)
      expect(testPlayer.xp).toBe(0)
      expect(testPlayer.maxHp).toBe(14)
      expect(testPlayer.getMaxHp()).toEqual(14)
      expect(testPlayer.hp).toBe(14)
      expect(testPlayer.dead).toBe(false)
      
    });
  });

  describe('test to pick up item', () => {
    it('checks picking up item', () => {
      const testPlayer = new playerChar("Bob")
      const testItem1 = 'stuff'
      const testItem2 = 'more stuff'
      testPlayer.pickUp(testItem1)
      testPlayer.pickUp(testItem2)
      expect(testPlayer.inventory).toEqual(['stuff', 'more stuff'])
    });
  });
  describe('test to equip weapon', () => {
    it('test equip weapon', () => {
      const testPlayer = new playerChar("Bob")
      const testWeapon = 'sword'
      testPlayer.equipWeapon(testWeapon)
      expect(testPlayer.weapon).toEqual('sword')

    });
  });
  describe('test to equip armour', () => {
    it('test equip armour', () => {
      const testPlayer = new playerChar("Bob")
      const testArmour = 'leather armour'
      testPlayer.equipArmour(testArmour)
      expect(testPlayer.armour).toEqual('leather armour')
      
    });
  });
  describe('get xp to level up', () => {
    it('shows how much xp you need till you level up', () => {
      const testPlayer = new playerChar("Bob")     
      expect(testPlayer.tillLevel()).toEqual(100)
      
    });
  });
  describe('adding XP', () => {
    it('adding XP to player', () => {
      const testPlayer = new playerChar("Bob")
      testPlayer.addXp(10)
      expect(testPlayer.xp).toBe(10)
      
    });
  });
  describe('Level UP!', () => {
    it('Leveling up', () => {
      const testPlayer = new playerChar("Bob")
      testPlayer.addXp(110)
      expect(testPlayer.xp).toBe(10)
      expect(testPlayer.level).toBe(2)
      
    });
  });
  describe('Level UP! with more xp', () => {
    it('should reset xp but keep remainder', () => {
      const testPlayer = new playerChar("Bob")
      testPlayer.addXp(110)
      expect(testPlayer.level).toBe(2)
      expect(testPlayer.xp).toBe(10)
      expect(testPlayer.tillLevel()).toEqual(190)
      expect(testPlayer.maxHp).toBe(18)


      testPlayer.addXp(110)
      expect(testPlayer.xp).toBe(120)
      expect(testPlayer.level).toBe(2)
      expect(testPlayer.tillLevel()).toEqual(80)
      testPlayer.addXp(380)
      expect(testPlayer.level).toBe(4)
      


    });
  });

  describe('Take damage', () => {
    it('should reduce hp', () => {
      const testPlayer = new playerChar("Bob")
      testPlayer.takeDamage(10)
      expect(testPlayer.hp).toBe(4)
    });
  });
  describe('Heal', () => {
    it('should increce hp up to max hp', () => {
      const testPlayer = new playerChar("Bob")
      testPlayer.takeDamage(10)
      testPlayer.heal(8)
      expect(testPlayer.hp).toBe(12)
      testPlayer.heal(8)
      expect(testPlayer.hp).toBe(14)

    });
  });
  describe('taking damage and healing with diff levels', () => {
    it('should heal to max', () => {
      const testPlayer = new playerChar("Bob")
      testPlayer.takeDamage(10)
      testPlayer.takeDamage(10)
      testPlayer.takeDamage(10)
      expect(testPlayer.dead).toBe(true)
    });
  });

  describe('taking damage till death', () => {
    it('should heal to max', () => {
      const testPlayer = new playerChar("Bob")
      testPlayer.addXp(110)
      expect(testPlayer.hp).toBe(14)
      testPlayer.heal(8)
      expect(testPlayer.hp).toBe(18)
    });
  });