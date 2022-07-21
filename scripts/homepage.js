import { cardAboveFooter, footer } from "../components/combinedFooter.js";
import { navbar } from "../components/navbar.js";
document.querySelector("#footer").innerHTML = footer();
document.querySelector("#cardAboveFooter").innerHTML = cardAboveFooter();
document.querySelector("#navbar").innerHTML = navbar();

//------------------------------------------------------------------------------------

let arr = [{
    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1566289_180x.png?v=1635615949",
    title:"DIVA! T-SHIRT",
    cutprice:660,
    price:1000,
    save:20
  },
  {
    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2246726_180x.jpg?v=1651848885",
    title:"LA MEDUSA RUBBER MULES",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2269029_180x.jpg?v=1651849007",
    title:"THE FLURO MOTO SHOT BAG",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2108663_180x.jpg?v=1651612913",
    title:"OPEN FOR A CHANGE BIO-BASED SNEAKERS",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2132500_180x.jpg?v=1646349256",
    title:"# USETHEEXISTING SNEAKERS",
    cutprice:660,
    price:400,
    save:20
  }];
//--------------------------------------------------------------------------------------------------
  let arr2 = [{
    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311930311_RLLZ_1_360x.jpg?v=1658391371",
    title:"DIVA! T-SHIRT",
    cutprice:660,
    price:1000,
    save:20
  },
  {
    image:"	https://cdn.shopify.com/s/files/1/0248/3473/6191/p…v3hcuS7RGVS0VZojPouPYfsw-25_360x.jpg?v=1607399172",
    title:"LA MEDUSA RUBBER MULES",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"	https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1885926_360x.jpg?v=1637852303",
    title:"THE FLURO MOTO SHOT BAG",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"	https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311313221_RLLZ_1_360x.jpg?v=1658247302",
    title:"OPEN FOR A CHANGE BIO-BASED SNEAKERS",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311784215_RLLZ_1_360x.jpg?v=1658243008",
    title:"# USETHEEXISTING SNEAKERS",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"	https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313738171_RLLZ_1_360x.jpg?v=1658103665",
    title:"DIVA! T-SHIRT",
    cutprice:660,
    price:1000,
    save:20
  },
  {
    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311784200_RLLZ_1_360x.jpg?v=1657903548",
    title:"LA MEDUSA RUBBER MULES",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311886735_RLLZ_1_360x.jpg?v=1657885742",
    title:"THE FLURO MOTO SHOT BAG",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"	https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311784202_RLLZ_1_360x.jpg?v=1658114441",
    title:"OPEN FOR A CHANGE BIO-BASED SNEAKERS",
    cutprice:660,
    price:400,
    save:20
  },{
    image:"	https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1311784216_RLLZ_1_360x.jpg?v=1657888890",
    title:"# USETHEEXISTING SNEAKERS",
    cutprice:660,
    price:400,
    save:20
  }];


  let showProduct = (arr) => 
{
  arr.forEach(el => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let title = document.createElement("h3");
    title.innerText = el.title;
    
    let cutprice = document.createElement("p");
    cutprice.innerText = `$${el.cutprice}`;

    let price = document.createElement("p");
    price.innerText = `$${el.price}`;

    let save = document.createElement("p");
    save.innerText = `Save ${el.save}%`;

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("class","priceDiv");
    priceDiv.append(cutprice,price,save);

    let qBtn = document.createElement("button");
    qBtn.innerText = "Quick Look";
    qBtn.setAttribute("id","myBtn");
    qBtn.addEventListener("click", () =>{
      modal.style.display = "block";
      showModal(el);
    })

    div.append(img,title,priceDiv,qBtn);
    document.querySelector("#top-section").append(div);
  })
}

showProduct(arr);

let showProduct2 = (arr2) => 
{
  arr2.forEach(el => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let title = document.createElement("h3");
    title.innerText = el.title;
    
    let cutprice = document.createElement("p");
    cutprice.innerText = `$${el.cutprice}`;

    let price = document.createElement("p");
    price.innerText = `$${el.price}`;

    let save = document.createElement("p");
    save.innerText = `Save ${el.save}%`;

    let priceDiv = document.createElement("div");
    priceDiv.setAttribute("class","priceDiv");
    priceDiv.append(cutprice,price,save);

    let qBtn = document.createElement("button");
    qBtn.innerText = "Quick Look";
    qBtn.setAttribute("id","myBtn");
    qBtn.addEventListener("click", () =>{
      modal.style.display = "block";
      showModal(el);
    })

    div.append(img,title,priceDiv,qBtn);
    document.querySelector("#top-section2").append(div);
  })
}

showProduct2(arr2);

let showModal = (el) => {
localStorage.setItem("modal-display",JSON.stringify(el));
let proObj = JSON.parse(localStorage.getItem("modal-display"));
showData(proObj);
}

let showData = (obj) => {
  document.querySelector(".modal-content").innerHTML = null;

  let ppricediv = document.createElement("div");
   ppricediv.setAttribute("class", "ppricediv");

  let pimg = document.createElement("img");
    pimg.src = obj.image;

    let ptitle = document.createElement("h2");
    ptitle.innerText = obj.title;

    let pcutprice = document.createElement("p");
    pcutprice.innerText = `$${obj.cutprice}`;
    pcutprice.style.textDecoration = "line-through";

    let pprice = document.createElement("p");
    pprice.innerText = `$${obj.price}`;

    let psave = document.createElement("p");
    psave.innerText = `Save ${obj.save}%`;

    let pship = document.createElement("p");
    pship.innerText = `FREE SHIPPING ON ORDERS OVER $99`;

    let pbtn = document.createElement("button");
    pbtn.innerText = `ADD TO CART`;
    pbtn.addEventListener("click", () => {
      addtols(obj);
    })

    let ptext1 = document.createElement("p");
    ptext1.innerText = `Please note that this item ships internationally and expedited shipping is not available. Delivery may be delayed.`;

    let ptext2 = document.createElement("p");
    ptext2.innerText = `Usually ships in 1 to 2 business days ${obj.title} camera bag made of leather with Double-J monogram on the front. Two independent zippered compartments, removable and adjustable shoulder strap, zipper pulls with leather straps, flat back pocket and imprinted top logo. Fabric-lined interior with one open flat pocket, ruthenium-finish metalware.`;

    ppricediv.append(pcutprice,pprice,psave);
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id", "img-div");
    imgdiv.append(pimg);

    let detailsdiv = document.createElement("div");
    detailsdiv.setAttribute("id", "details-div");
    detailsdiv.append(ptitle,ppricediv,pship,pbtn,ptext1,ptext2);

    document.querySelector(".modal-content").append(imgdiv,detailsdiv);
}
let addtols = (obj) => {
    localStorage.setItem("cart", JSON.stringify(obj));
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}