

import {cardAboveFooter,footer} from "../../components/combinedFooter.js"
document.getElementById("footer").innerHTML =  footer();
document.getElementById("cardAboveFooter").innerHTML = cardAboveFooter()

import {navbar} from "../../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();


let data = JSON.parse(localStorage.getItem("detail"))
console.log(data.title)
let display = document.getElementById("display")

function append(data){

    let div = document.createElement("div")
    let image = data.image;
    let title = data.title;

    div.append(image,title)

    display.append(div)

}
append()