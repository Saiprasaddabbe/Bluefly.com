

import {cardAboveFooter,footer} from "/swank-talk-7472/components/combinedFooter.js"
document.getElementById("footer").innerHTML = cardAboveFooter();
document.getElementById("footer").innerHTML = footer();


const url = `https://fakestoreapi.com/products`

let getData = async ()=>{
    let res = await fetch(url);
    let data = await res.json();
    append(data)
    console.log(data);
}
getData()


let append = (data)=>{
    let container = document.getElementById("product")

    data.forEach((elem,index)=>{
        let div = document.createElement("div")
        let img = document.createElement("img")
        let title = document.createElement("p")
        let price = document.createElement("p")
        let disc = document.createElement("p")

        img.src = elem.image;
        title.innerText = elem.title;
        price.innerText = elem.price;
        disc.innerText = elem.description;

        div.append(img,title,price)

        container.append(div)
    })
}