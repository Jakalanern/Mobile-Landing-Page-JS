// Selections
const mobileNav = document.querySelector(".mobile-nav")
const mobileNavSection = document.querySelector(".mobile-nav section")
const mobileNavLi = document.querySelectorAll(".mobile-nav section li")
const burger = document.querySelector(".burger")
const x = document.querySelector(".x")
const mainLogo1 = document.querySelector("main-logo-1")
const l1 = document.querySelector("#l1")
const l2 = document.querySelector("#l2")
const l3 = document.querySelector("#l3")
const l4 = document.querySelector("#l4")
const slider = document.querySelectorAll('.items');
const scrollButton = document.querySelector("#scroll-button")
const allImgs = document.querySelectorAll("img")

let isDown = false;
let startX;
let scrollLeft;

// Scroll to Top
scrollButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

//Hide dropdown NAV
mobileNav.style.visibility = "hidden"

//On burger click, show dropdown NAV
burger.addEventListener("click", function () {
    mobileNav.style.visibility = "visible"
    mobileNav.style.opacity = "1"
    for (let li of mobileNavLi) {
        li.style.opacity = "1"
        li.style.transform = "translateX(0px)"
    }
    mobileNav.style.transform = "translateY(0px)"
})

//On X click, close dropdown NAV
x.addEventListener("click", () => {
    mobileNav.style.transform = "translateY(-500px)"
    for (let li of mobileNavLi) {
        li.style.opacity = "0"
    }
    l1.style.transform = "translateX(50px)"
    l2.style.transform = "translateX(100px)"
    l3.style.transform = "translateX(150px)"
    l4.style.transform = "translateX(200px)"
})

// Sliding Twitter Feed
for (let s of slider) {
    s.addEventListener('mousedown', (e) => {
        isDown = true;
        s.classList.add('active');
        startX = e.pageX - s.offsetLeft;
        scrollLeft = s.scrollLeft;
    });
    s.addEventListener('mouseleave', () => {
        isDown = false;
        s.classList.remove('active');
    });
    s.addEventListener('mouseup', () => {
        isDown = false;
        s.classList.remove('active');
    });
    s.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - s.offsetLeft;
        const walk = (x - startX) * 1.25; //scroll-fast
        s.scrollLeft = scrollLeft - walk;
    });
}