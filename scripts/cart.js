let Data = [
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
    name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
    color: "37 / Orange",
    price: "1170",
    strikedoffprice: "$2599",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
    name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
    price: 699,
    strikedoffprice: 999,
    color: "37 / Orange",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
    name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
    price: 945,
    strikedoffprice: 2099,
    color: "37 / Orange",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
    name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
    price: 399,
    strikedoffprice: 799,
    color: "37 / Orange",
  },
];
// <-------------display cart data------------------------------->
localStorage.setItem("hello", JSON.stringify(Data));
let CartData = JSON.parse(localStorage.getItem("cart")) || [];

let display = (Data) => {
  let maindiv = document.querySelector("#gproduct");
  maindiv.innerHTML = null;
  for (let i = 0; i < Data.length; i++) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");
    div6.innerHTML = `<div class="gp"> <i class="fa-solid fa-minus"></i></div><div id='N_item'>1</div>
    <iv><i class="fa-solid fa-plus"></i></iv>`
    div6.setAttribute("id", "gautam");
    // div6.addEventListener("click",()=>{
    //   console.log("hello")
    // })
    let img = document.createElement("img");
    img.src = Data[i].image_url;
    let name = document.createElement("p");
    name.innerText = Data[i].name;
    let cost = document.createElement("p");
    cost.innerText = `$ ${Data[i].price}`;
    let color = document.createElement("p");
    color.innerText = Data[i].color;
    let tot = document.createElement("p");
    tot.innerText = `$ ${Data[i].price}`;
    let button = document.createElement("button");
    button.innerText = "REMOVE";
    button.setAttribute("class", "rbtn");
    button.addEventListener("click", function () {
      let p = Data[i];
      let index = i;
      deleter(index);
    });
    div1.append(img);
    div2.append(name, color, button);
    div3.append(div1, div2);
    div4.append(cost, div6, tot);
    div5.append(div3, div4);

    maindiv.append(div5);
  }

};

// ----------------------------delete item------------------------------------>
display(Data);
let data = JSON.parse(localStorage.getItem("hello")) || [];
function deleter(index) {
  data.splice(index, 1);
  localStorage.setItem("hello", JSON.stringify(data));
  display(data);
}

// ---------------------------------------------increment decrement html---------------------------->
function Inc_decr() {
  return `
  <div id="gp"> <i class="fa-solid fa-minus"></i></div>
<div id='N_item'>1</div>
<div><i class="fa-solid fa-plus"></i></div>`;
}

let dec = document.getElementsByClassName("gp")
console
// ----------------------------------increment decrement js-------------------------------------------->
// let ff = document.querySelector('#gp').innerHTML;
// ff.addEventListener("click",gautam)
// function gautam(){
//   console.log("hello")
// }
// console.log(ff)





import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
import { cardAboveFooter, footer } from "../components/combinedFooter.js";
document.querySelector("#footer").innerHTML = footer();
document.querySelector("#cardAboveFooter").innerHTML = cardAboveFooter();
