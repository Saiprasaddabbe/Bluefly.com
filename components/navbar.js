let navbar = () => {
  return ` <div id="first">
    <div class="logo">
      <img
        src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243"
        alt=""
      />
    </div>
    <div class="q-p-c">
      <div id="query">
        <input type="text" placeholder="Search" />
      </div>
      <div id="profile">
        <span class="material-symbols-outlined"> person_filled </span>
      </div>
      <div id="cart">
        <span class="material-symbols-outlined"> shopping_bag </span>
      </div>
    </div>
  </div>
  <div id="tabs">
    <p>CLOTHING</p>
    <p>SHOES</p>
    <p>HANDBAGS & ACCESSORIES</p>
    <p>DESIGNERS</p>
    <p>SUNGLASSSES</p>
    <p>JEWELRY & WATCHES</p>
    <p>UNDER $ 50</p>
    <p>BEAUTY</p>
  </div>
  <div id="clearance">
    <p>CLEARANCE</p>
  </div>`;
};
export { navbar };
