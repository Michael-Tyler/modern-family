import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const yearlyPlan = createPlan()
console.log(yearlyPlan)