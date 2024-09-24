fetch("http://localhost:3000/cart/")
  .then((res) => res.json())
  .then((res) => {
    let data = "";
    let totalPrice = 0;
    res.forEach((el, i) => {
      data += `
      <div style ="border : 1px solid black"></div>
            <div class="item-details" style="margin-top : 35px">
          <img src="${el.image}" alt="Swimming Jammer" style="width=1000px"; height="200px" />
          <div>
            <h3>NABAIJI Swimming jammer Fiti black red mesh</h3>
            <p style="margin-top:10px"  >Size: M &nbsp; | &nbsp; Qty: 1</p>
            <p class="price" id="price" style="margin-top:10px" > ₹${el.price} &nbsp; <span class="original-price" style="margin-top:10px"  ></span> &nbsp; 38% Off</p>
            <p>Delivery by 22nd Sep 2024</p>
            <button class="remove-btn">Remove</button>
          </div>
        </div>
      </div>
    </div>
            `;
      totalPrice += el.price;
    });
    document.querySelector("#allCarts").innerHTML = data;
    document.querySelector("#totalPrice").innerHTML = `Total: ₹${totalPrice}`;
  })
  .catch((err) => {
    console.log(err);
  });

// <input type="checkbox" checked />;
