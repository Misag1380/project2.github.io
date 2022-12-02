let img0Elem = document.getElementById("img0")

let img1Elem = document.getElementById("img1")
let img2Elem = document.getElementById("img2")
let img3Elem = document.getElementById("img3")
let img4Elem = document.getElementById("img4")
let pElem = document.getElementById("pfood") 

let fotElem = document.getElementById("fot")

let btn4Elem = document.getElementById("btn4")

btn4Elem.addEventListener("mousemove",btnclick)
function btnclick(){
    pElem.style.transition = "all 2s"
    pElem.style.opacity = "1"
    pElem.style.backgroundColor = "green"
}

function cheanch(){
    pElem.style.transition = "all 3s"
    pElem.style.opacity = "0"
    pElem.style.backgroundColor = "white"
}

img1Elem.addEventListener("click",img1click)
function img1click(){
    img0Elem.src = img1Elem.src
}

img2Elem.addEventListener("click",img2click)
function img2click(){
    img0Elem.src = img2Elem.src
}

img3Elem.addEventListener("click",img3click)
function img3click(){
    img0Elem.src = img3Elem.src
}

img4Elem.addEventListener("click",img4click)
function img4click(){
    img0Elem.src = img4Elem.src
}