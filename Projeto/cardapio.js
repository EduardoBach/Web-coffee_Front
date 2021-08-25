let content = document.getElementById("cont")
let arrow = document.getElementById("arr")

let loc = document.getElementById("location")
let arrow2 = document.getElementById("arr2")


function show(){
    content.style.opacity = "1"
    arrow.style.opacity = "1"
}

function hide(){
    content.style.opacity= "0"
    arrow.style.opacity= "0"
}

function show1(){
    loc.style.opacity = "1"
    arrow2.style.opacity = "1"
}

function hide1(){
    loc.style.opacity= "0"
    arrow2.style.opacity= "0"
}


var menupr = document.getElementById("menu2")

var nav = document.getElementById("open")

var side = document.getElementById("menu3")

var salg = document.getElementById("menu4")

function menushow(){
    menupr.style.opacity="1"
    nav.style.opacity="0"
    side.style.opacity="0"
    salg.style.opacity="0"
}

function menusee(){
    menupr.style.opacity="0"
    nav.style.opacity="1"
    side.style.opacity="0"
    salg.style.opacity="0"
}

function doces(){
    menupr.style.opacity="0"
    nav.style.opacity="0"
    side.style.opacity="1"
    salg.style.opacity="0"
}

function salgados(){
    menupr.style.opacity="0"
    nav.style.opacity="0"
    side.style.opacity="0"
    salg.style.opacity="1"
}