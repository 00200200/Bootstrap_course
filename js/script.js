const navigation = document.querySelector("#navbar")

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








})