

import {cardAboveFooter,footer} from "/swank-talk-7472/components/combinedFooter.js"
document.getElementById("cardAboveFooter").innerHTML = cardAboveFooter();
document.getElementById("footer").innerHTML = footer();

import { navbar } from "../../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

import { sidebar } from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar()



   
var container = document.getElementById("product")
shoesData.forEach(function (elem) {
   
    var div = document.createElement("div")
    var img = document.createElement("img")
    var title = document.createElement("p")
    var price = document.createElement("p")
    var brand = document.createElement("p")
    var label = document.createElement("p")
    var disc = document.createElement("p")


    img.setAttribute("src", elem.image)
    title.innerText = elem.title;
    price.innerText = elem.price;
    brand.innerText = elem.brand;
    label.innerText = elem.label;
    disc.innerText = elem.discPrice;

   div.addEventListener("click",function(){
    addCart()
   })
   let inAline = document.createElement("div")
   inAline.append(price,disc)

    div.append(img,brand,title,inAline,label)

    container.append(div)
})
 

function addCart(){
    console.log("al;kdjfakjdskfa")
}