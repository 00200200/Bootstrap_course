const navigation = document.querySelector("#navbar")
const navigation_link = document.querySelectorAll(".nav-link")
const show_hamburger = document.querySelector("#navbarNavAltMarkup")
document.addEventListener("DOMContentLoaded",function(){

function addShadow(){
    if (window.scrollY >= 300){
        navigation.classList.add('shadow-bg')
    }
    else{
        navigation.classList.remove('shadow-bg')
    }
}

window.addEventListener("scroll",addShadow)


navigation_link.forEach(element => element.addEventListener('click', () => show_hamburger.classList.remove('show')))

})