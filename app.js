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

mobileNav.style.visibility = "hidden"

burger.addEventListener("click", () => {
    mobileNav.style.visibility = "visible"
    mobileNav.style.opacity = "1"
    for (let li of mobileNavLi) {
        li.style.opacity = "1"
        li.style.transform = "translateX(0px)"
    }
    mobileNav.style.transform = "translateY(0px)"
})


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