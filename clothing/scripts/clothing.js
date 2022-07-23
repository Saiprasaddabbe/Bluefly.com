

import {navbar} from "../../components/navbar.js"
// document.getElementById("navbar").innerHTML = navbar();  //commented by saiprasad
 
import {sidebar} from "../../ShoesPage/components/sidebar.js"
document.getElementById("sidebar").innerHTML = sidebar();

import { cardAboveFooter, footer} from "../../components/combinedFooter.js"
document.getElementById("footer").innerHTML = footer()
document.getElementById("cardAboveFooter").innerHTML = cardAboveFooter()


product.forEach(function (elem) {
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image)

    let brand = document.createElement("p");
    brand.innerText = elem.brand

    let name = document.createElement("h5")
    name.innerText = elem.title

    let price = document.createElement("h3")
    price.innerText = elem.price

    let discounted_price = document.createElement("h4")
    discounted_price.innerText = elem.discounted_price
    discounted_price.style.color="red";
    
    let button = document.createElement("button")
    button.innerText = "Add to Cart"
    button.addEventListener("click",function(){
        localStorage.setItem("clothdetail",JSON.stringify(elem))
        window.location.href = "cart.html"
    })

    box.append(image, name,brand, price,discounted_price,button)
    document.getElementById("clothing").append(box)

})