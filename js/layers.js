addLayer("1", {
    name: "?", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: " ", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    infoboxes: {
    lore: {
        title: "?",
        body() { return "The first void item, nothing. A basic layer." },
    },
  
},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "?", // Name of prestige currency
    baseResource: "space", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(2),
            mult = mult.mul(player.points.add(1).pow(0.3))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(2)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    upgrades: {
    11: {
        title: "Upgrade ?",
        cost: new Decimal(100),
        description: "? does not need your assistance.",
        effect() {
                let eff = new Decimal(2)
                return eff
            },
    },
            12: {
        title: "Takeover Onward",
        cost: new Decimal(100),
        description: "? does not need your assistance.",
        effect() {
                let eff = new Decimal(2)
                return eff
            },
    },
},
     passiveGeneration() { return hasUpgrade('1', 11) ? 1 : 0 },

    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})


addLayer("T", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: false, 
                    points: new Decimal(0),// You can add more variables here to add them to your layer.             // "points" is the internal name for the main resource of the layer.
    }},
    name: "Time", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "⏰",
    color: "#4BDC13", 
        branches: ["1"],// The color for this layer, which affects many elements.
    resource: "prestige points",            // The name of this layer's main prestige resource.
    row: 1,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    upgrades: {
        // Look in the upgrades docs to see what goes here!
    },
})
