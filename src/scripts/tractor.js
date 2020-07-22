import { addPlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (plantingPlanArr) => {
    //this takes the array of arrays and makes it one big array of strings
    for (const rowArray of plantingPlanArr) {
        //this iterates through that big array of strings and does things
        for (const plant of rowArray) {
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
            } else if (plant === "Wheat") {
                addPlants(createWheat())
            }
        }
    }
}