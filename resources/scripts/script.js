let video = document.querySelector("../img/3");

window.addEventListener('scroll', function(){
    let value = 1+ window.scrollY/-600;
    video.style.opacity = value
})