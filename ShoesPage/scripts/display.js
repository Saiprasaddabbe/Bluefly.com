

import {cardAboveFooter,footer} from "../../components/combinedFooter.js"
document.getElementById("footer").innerHTML =  footer();
document.getElementById("cardAboveFooter").innerHTML = cardAboveFooter()

import {navbar} from "../../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();


let data = JSON.parse(localStorage.getItem("detail"))
// console.log(data.title)

let cont = document.getElementById("display")

let image = document.createElement("img")
image.src = data.image
let brand = document.createElement("p")
brand.innerText = "Brand:- "+data.brand;
let title = document.createElement("p")
title.innerText ="Title:- "+ data.title;
let price = document.createElement("p")
price.innerText ="Price:- "+ data.price;
let button = document.createElement("button")
button.innerHTML = "Add to cart"
button.addEventListener("click",()=>{
    localStorage.setItem("cart",JSON.stringify(data))
})

let div1 = document.createElement("div")
div1.append(image);

let div2 = document.createElement("div")
div2.append(brand,title, price,button)
cont.append(div1,div2)