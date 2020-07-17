import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlants, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
//this is to check the Sowing the field

//this is to check the creating seeds
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

//this is to check harvest plan
const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const planted = usePlants()
console.log(planted)
    // console.log(yearlyPlan)

//this is to check tilling the field
// const createHops = {
//     plant: "hops",
//     height: 120,
//     output: 20
// }
// addPlants(createHops)
// const plantArrayCopy = usePlants()
// console.log(plantArrayCopy)