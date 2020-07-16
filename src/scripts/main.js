import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlants, usePlants } from "./field.js"



const asparagusSeed = createAsparagus()
    //console.log(asparagusSeed)

const yearlyPlan = createPlan()
    //console.log(yearlyPlan)
const createHops = {
    plant: "hops",
    height: 120,
    output: 20
}
addPlants(createHops)
const plantArrayCopy = usePlants()
console.log(plantArrayCopy)