
import {navbar} from "../../components/navbar.js"
// document.getElementById("navbar").innerHTML = navbar();    //commented by saiprasad
 


import { cardAboveFooter, footer} from "../../components/combinedFooter.js"
document.getElementById("footer").innerHTML = footer()
document.getElementById("cardAboveFooter").innerHTML = cardAboveFooter()


let data =JSON.parse(localStorage.getItem("clothdetail"))

let cont = document.getElementById("cartData")
let img = document.createElement("img")
img.src = data.image;

let title = document.createElement("p")
title.innerText = data.title;

let brand = document.createElement("p")
brand.innerText = data.brand;

let price = document.createElement("p")
price.innerText = data.price;

let btn = document.createElement("button")
btn.innerText = "Add to Cart"


let div1 = document.createElement("div")
div1.append(img)
let div2 = document.createElement("div")

div2.append(title,brand,price,btn)
cont.append(div1,div2);

let item = [];

btn.addEventListener("click",function(){
    item.push(data)    
    localStorage.setItem("hello",JSON.stringify(data))
        
    })
    

