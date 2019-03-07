const overviewItems = document.querySelectorAll(".overview-navigation-item-container")
const overviewItemsLinks = document.querySelectorAll(".overview-navigation-item-container a")
const overviews = document.querySelectorAll(".overview")
const test = document.querySelector("#features-section h2")

const activeOvClass = "active-overview"
const activeOvItemClass = "active-item"


const isInViewport = elem => {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

window.addEventListener('scroll', function (event) {
	if (isInViewport(test)) {
		test.classList.add("fade-in-right--on-viewport")
	}
})

const cleanOverviews = (overviewList) => {
    overviewList.forEach(ov => {
        ov.classList.remove(activeOvClass)
    })
}

const cleanOverviewsItems = (overviewItemList) => {
    overviewItemList.forEach(ov => ov.classList.remove(activeOvItemClass))
}

overviewItems.forEach(ovi => {
    ovi.addEventListener("click", e => {
        cleanOverviews(overviews)
        cleanOverviewsItems(overviewItems)

        const target = e.target.id ? e.target : e.target.parentNode
        const overviewId = target.id + "-overview"

        const overview = document.getElementById(overviewId)

        target.classList.add(activeOvItemClass)
        overview.classList.add(activeOvClass)    
    })
})