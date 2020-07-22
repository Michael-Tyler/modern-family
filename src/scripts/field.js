const plantArray = []
export const addPlants = (seeds) => {
    const seedObject = []
    if (Array.isArray(seeds)) {
        for (const seed of seeds)
            plantArray.push(seed)
    } else {
        plantArray.push(seeds)
    }
}


export const usePlants = () => {
    return plantArray.slice()
}