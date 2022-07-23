

import {cardAboveFooter,footer} from "../../components/combinedFooter.js"
document.getElementById("cardAboveFooter").innerHTML = cardAboveFooter();
document.getElementById("footer").innerHTML = footer();

import { navbar } from "../../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

import { sidebar } from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar()



   
let container = document.getElementById("product")
shoesData.forEach((elem,index)=> {
   
    let div = document.createElement("div")
    let img = document.createElement("img")
    let title = document.createElement("p")
    let price = document.createElement("p")
    let brand = document.createElement("p")
    let label = document.createElement("p")
    let disc = document.createElement("p")


    img.src = elem.image;
    title.innerText = elem.title;
    price.innerText = elem.price;
    brand.innerText = elem.brand;
    brand.style.textAlign= "center";
    brand.style.marginLeft = "8%"
    label.innerText = elem.label;
    disc.innerText = elem.discPrice;

   div.addEventListener("click",()=>{
    localStorage.setItem("detail",JSON.stringify(elem))
    window.location.href = "display.html"
    // addCart(elem)
   })
   let inAline = document.createElement("div")
   inAline.append(price,disc)

    div.append(img,brand,title,inAline,label)

    container.append(div)
})
 

