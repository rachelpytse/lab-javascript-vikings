// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health-damage
    }

}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
        super(health,strength)
        this.name = name
    }

    receiveDamage(damage) {
        super.receiveDamage(damage)
        let msgViking = ''
        if (this.health>0) {
            msgViking = `${this.name} has received ${damage} points of damage`
        } else {
            msgViking = `${this.name} has died in act of combat`
        }
        
        return msgViking
         
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}
    



// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage)
        let msgSaxon = ''
        if (this.health>0) {
            msgSaxon = `A Saxon has received ${damage} points of damage`
        } else {
            msgSaxon = 'A Saxon has died in combat'
        }
        
        return msgSaxon
         
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack() {
        let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length) // 2
        let randomSaxon = this.saxonArmy[randomSaxonIndex]
        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length) // 5
        let randomViking = this.vikingArmy[randomVikingIndex]

        const saxonDamage = randomViking.strength
        const saxonWarMsg = randomSaxon.receiveDamage(saxonDamage) // "a saxon has died" / "A Saxon has received ..."


        if (randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex,1)
        }

        return saxonWarMsg
    }

    saxonAttack() {
        let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length) // 2
        let randomSaxon = this.saxonArmy[randomSaxonIndex]
        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length) // 5
        let randomViking = this.vikingArmy[randomVikingIndex]

        const vikingDamage = randomSaxon.strength
        const vikingWarMsg = randomViking.receiveDamage(vikingDamage) 


        if (randomViking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex,1)
        }

        return vikingWarMsg
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
