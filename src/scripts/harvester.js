//function takes in plant array
export const harvestPlants = (plantArr) => {
    //empty seedobject array that will be returned
    let seedObjArray = []
        //this itterates the plant array that gets plugged into this function
    for (const plantObj of plantArr) {
        //if the object in the plant has a type value of corn its output value will get divided in half
        if (plantObj.type === "Corn") {
            const cornHalved = plantObj.output / 2
            for (let cornTotal = 0; cornTotal < cornHalved; cornTotal++) {
                seedObjArray.push(plantObj)
            }
        } else {
            for (let cropCount = 0; cropCount < plantObj.output; cropCount++) {
                seedObjArray.push(plantObj)
            }
        }
    }
    return seedObjArray
}