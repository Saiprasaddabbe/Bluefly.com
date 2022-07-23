// ***************************************** local storage *****************************************>
let Data = JSON.parse(localStorage.getItem("cart"));
let details = JSON.parse(localStorage.getItem("useradd")) || [];
let gift = JSON.parse(localStorage.getItem("gcode")) || false;

// ****************************************************************************************
//  ****************************************** getting html tag *********************************
let email = document.getElementById("email");
let country = document.getElementById("country");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let apartment = document.getElementById("Apartment");
let address = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zip = document.getElementById("zip");
let phone = document.getElementById("phone");

// ************************************** constructor ****************************************************
function persondetail(
  email,
  country,
  fname,
  lname,
  apartment,
  address,
  city,
  state,
  zip,
  phone
) {
  this.name = `${fname} ${lname}`;
  this.email = email;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.country = country;
}

// *********************************************** store user address and details**************************************

let p = document.getElementById("last").addEventListener("click", () => {
  event.preventDefault();
  let det = new persondetail(
    email.value,
    country.value,
    fname.value,
    lname.value,
    apartment.value,
    address.value,
    city.value,
    state.value,
    zip.value,
    phone.value
  );
  if (
    email.value == "" ||
    country.value == "" ||
    fname.value == "" ||
    lname.value == "" ||
    apartment.value == "" ||
    address.value == "" ||
    city.value == "" ||
    state.value == "" ||
    zip.value == "" ||
    phone.value == ""
  ) {
    alert("Please fill all the credential");
  } else {
    details.push(det);
    window.location.href = "#";
  }
});

// ****************************************** display purachage product**************************************
let display = (Data) => {
  let maindiv = document.querySelector("#product");
  maindiv.innerHTML = null;
  for (let i = 0; i < Data.length; i++) {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "checkdiv");
    let img = document.createElement("img");
    img.src = Data[i].image;
    let name = document.createElement("p");
    name.innerText = Data[i].title;
    let tot = document.createElement("h2");
    tot.innerText = `$ ${Data[i].price}`;
    tot.setAttribute("class", "totalcost");
    div1.append(img, name, tot);
    maindiv.append(div1);
  }
};
display(Data);

// ********************************** total price  ********************************************************************>
let totalprice = JSON.parse(localStorage.getItem("total"));
let subprice = document.getElementById("subprice");
subprice.innerText = `$ ${totalprice}`;
let usdp = document.getElementById("usd");
usdp.innerText = totalprice;

// *********************************** promocode gift card ****************************************************

let G_apply = document.getElementById("apply");
G_apply.addEventListener("click", () => {
  let InterdCode = document.getElementById("gift");
  let aelrt = document.getElementById("alert");
  if (Data.length == 0) {
    alert("Please add  product to buy ");
  }
  if (InterdCode.value === "") {
    alert("Please inter the gift Card or Discount Code");
  } else if (InterdCode.value === "gautam" && gift == false) {
    totalprice = totalprice - Math.floor((totalprice * 20) / 100);
    usdp.innerText = totalprice;

    aelrt.innerText = "Your code has applied";
    localStorage.setItem("gcode", true);
  } else {
    alert("Please inter valid card/code");
    // aelrt.innerText = "for 20% dicount use this Promocode :- gautam";
  }
});
