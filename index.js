document.addEventListener("DOMContentLoaded", function() {
    const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")
const images = document.querySelectorAll(".img-carousel .images li")
let currentIndex = 0

function displayImage(index) {
    images.forEach((image, i) => {
        image.style.display = "none"
    })

    images[index].style.display = "block"
}

nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length
    displayImage(currentIndex)
})

prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    displayImage(currentIndex)
})

displayImage(currentIndex)


})