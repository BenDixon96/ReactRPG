import ConsumableItem from "./itemConClass";

class HealthPotion extends ConsumableItem{
    constructor(id, name, effect, hpRestore){
        super(id, name, effect)
            this.hpRestore = hpRestore;
        
    }
}