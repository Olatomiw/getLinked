const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const navlinks = document.getElementsByClassName("nav-links")[0]

console.log(toggleBtn)
console.log(navlinks)

toggleBtn.addEventListener("click", function(){
    navlinks.classList.toggle('active')
})