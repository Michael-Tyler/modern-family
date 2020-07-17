import { createPlan } from "./plan.js"
import { addPlants, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (plantingPlan) => {
    const emptyArray = []
    const yearlyPlan = createPlan()
        //const asparagus = createAsparagus()

    for (const planArray of yearlyPlan) {
        for (const plant of planArray) {
            if (plant === "Asparagus") {
                addPlants(createAsparagus())
            } else if (plant === "Corn") {
                addPlants(createCorn())
            } else if (plant === "Potato") {
                addPlants(createPotato())
            } else if (plant === "Soybean") {
                addPlants(createSoybean())
            } else if (plant === "Sunflower") {
                addPlants(createSunflower())
            } else {
                addPlants(createWheat())
            }
        }
    }
    return usePlants()




}