const overviewItems = document.querySelectorAll(".overview-navigation-item-container")
const overviews = document.querySelectorAll(".overview")

const activeOvClass = "active-overview"
const activeOvItemClass = "active-item"


const cleanOverviews = (overviewList) => {
    overviewList.forEach(ov => {
        ov.classList.remove(activeOvClass)
    })
}

const cleanOverviewsItems = (overviewItemList) => {
    overviewItemList.forEach(ov => ov.classList.remove(activeOvItemClass))
}

overviewItems.forEach(ovi => {
    ovi.addEventListener("click", (e) => {
    cleanOverviews(overviews);
    cleanOverviewsItems(overviewItems);
    
    const target = e.target;
    const overviewId = target.id + "-overview"
    
    const overview = document.getElementById(overviewId)
    
    target.classList.add(activeOvItemClass)
    overview.classList.add(activeOvClass)
        
})
})