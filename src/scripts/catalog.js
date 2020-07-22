export const catalog = (harvestedArr) => {
    const contentElement = document.querySelector(".container")

    for (const harvested of harvestedArr) {
        //console.log to see what you are iterating
        //console.log(harvested)

        contentElement.innerHTML += `
        <section class="plant">${harvested.type}</section>
        `
    }
}