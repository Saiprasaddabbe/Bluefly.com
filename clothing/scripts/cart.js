
import {navbar} from "../../components/navbar.js"
// document.getElementById("navbar").innerHTML = navbar();    //commented by saiprasad
 


import { cardAboveFooter, footer} from "../../components/combinedFooter.js"
document.getElementById("footer").innerHTML = footer()
document.getElementById("cardAboveFooter").innerHTML = cardAboveFooter()



let data =JSON.parse(localStorage.getItem("clothdetail"))
console.log(data)