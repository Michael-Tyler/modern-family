import { createPlan } from "./plan.js"
import { usePlants, addPlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

//variable to store the invoked create plan function
const yearlyPlan = createPlan()
    //console.log(yearlyPlan)
    /*This pushes the array of arrays, that depending on which "type",
    invoke a createPlant function which creates an object that simultaneously 
    pushes that object into an empty array  */
plantSeeds(yearlyPlan)
    /*this variable holds the copy of that empty array in field.js
     which now has been filled with objects*/
const planted = usePlants()

//this console.logs that copy
//console.log(planted)
/* this variable holds the invoked harvestPlants function as the array of objects 
is passed thru. In doing so the objects will be looped thru and pushed into an empty 
array based on their output*/
const harvestor = harvestPlants(planted)
console.log(harvestor)
    /*this component pulls in the large array of objects and looks at the type value
     and prints that string value onto the browser*/
const catologgedPlants = catalog(harvestor)