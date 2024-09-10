import Area from '../area'
import testItem from '../../items/consumableItems/testItem'
import ConsumableItem from '../../items/itemConClass'

const testItem2 = new ConsumableItem(2, 2, "test item 2", 1)

const forrest = new Area(
    1,
    0,
    0,
    'Forrest',
    [testItem, testItem2]
    )

export default forrest