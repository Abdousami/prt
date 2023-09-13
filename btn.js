let btn = document.querySelector("button")
let nav = document.querySelector(".btn")
let btn2 = document.getElementById("btn")
const mdw = window.matchMedia("(max-width:540px)")
btn2.onclick=function(){
    nav.style.display="flex";
    btn2.style.display="none";
    btn.style.display="flex"
}
btn.onclick=function(){
    nav.style.display="none";
    btn2.style.display="flex";
    btn.style.display="none"
}
if(mdw==true){
    nav.style.display="none";
    btn2.style.display="flex";
    btn.style.display="none";
}



