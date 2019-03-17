const overviewItems = document.querySelectorAll(".overview-navigation-item-container")
const overviewItemsLinks = document.querySelectorAll(".overview-navigation-item-container a")
const overviews = document.querySelectorAll(".overview")
const h2s = document.querySelectorAll("#features-section h2")
const featuresIcons = document.querySelectorAll(".feature-icon")
const featuresH3 = document.querySelectorAll(".features-container div h3")
const featuresP = document.querySelectorAll(".features-container div p")
const howItWorksImgs = document.querySelectorAll(".how-it-works-image")
const overviewContainer = document.querySelector(".overview-container")
const showMoreImage = document.querySelector("#show-more-image")
const overviewNavigation = document.querySelector("#overview-navigation")
const overviewUls = document.querySelectorAll(".overview ul")
const featuresContainer = document.querySelector(".features-container")
const toTopLink = document.querySelector(".to-top-link")
const mainNav = document.querySelector(".main-nav")

const fadeRight = [
    ...h2s,
    ...featuresIcons,
    ...featuresH3,
    ...featuresP,
    ...howItWorksImgs,
    ...overviewUls
]

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

showMoreImage.addEventListener("click", () => {
    overviewNavigation.scrollIntoView({behavior: "smooth", block: "end"})
})

window.addEventListener('scroll', e => {
	fadeRight.forEach(el => {
        if (isInViewport(el)) {
		  el.classList.add("fade-in-right--on-viewport")
	   }
    })
    console.log(featuresContainer)
    console.log(mainNav)
    if (toTopLink.classList.contains("visible")) {
        if (isInViewport(mainNav)) {
            toTopLink.classList.remove("visible")
        }
    } else {
        if (isInViewport(featuresContainer)) {
            toTopLink.classList.add("visible")
        }
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
        
        if (!overviewContainer.classList.contains("vh88")) overviewContainer.classList.add("vh88")
        
        overviewContainer.scrollIntoView({behavior: "smooth", block: "end"})
    })
})