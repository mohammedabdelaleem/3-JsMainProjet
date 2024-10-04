/*=====================
 ----online store-----
=======================*/

/*=====================
    Buy
=======================*/

const buyButtons = document.querySelectorAll("button.btn-primary");
const congratulation = document.getElementsByClassName("congratulation")[0];
const products = document.getElementsByClassName("products")[0];
const onlineProducts = document.querySelectorAll(".mycard");
const cartProducts = document.getElementsByClassName("cart-products")[0];

// when click on buy

const appendNewOrodectToTheCart = (imgSrc, TshirtName, price) => {
  // when click on buy , the button will be disabled
  // you don't need to check if the index is added from time

  const newProduct = `

<article id="addedProduct" class="item-container">
    
        <button id="del" class="btn btn-danger"  dir="rtl" lang="ar">حذف</button>
        
        <h2 class="price" style="color: red;">$${price}</h2>
        
        <div class="cquantity">
            <label for="quantity"  >الكمية</label>
            <input type="number" min="1" value="1" name="quantity" id="quantity" width="3px">
        </div>
        
        <div class="t-name-img" style="display: flex; justify-content: center; align-items: center; gap:8px ">
            <p class="shirt-name" style="font-size: 17px;">${TshirtName}</p>
            <img width="80" height="80" src=${imgSrc} >
        </div>
        
        </article>        
        
        `;

  cartProducts.innerHTML += newProduct;
};

const onBuyClick = (item) => {
  {
    // change button from buy to done
    item.setAttribute("disabled", "");
    item.classList.remove("btn-primary");
    item.classList.add("btn-success");
    item.innerHTML = "&#10003; Done";
    congratulation.classList.toggle("dn");
  }

  {
    // appear congratulation for 2 sec

    setTimeout(() => {
      congratulation.style.transform = "translateX(-60vw)";
    }, 2000);

    setTimeout(() => {
      congratulation.style.transform = "translateX(50%)";
      congratulation.classList.toggle("dn");
    }, 3000);
  }

  {
    // show your products
    //zoom in
    products.style.transform = "scale(1)";
  }

  const imgSrc =
    item.parentElement.parentElement.parentElement.getElementsByClassName(
      "card-img-top"
    )[0].src;

  const price = item.nextElementSibling.innerText.replace("$", "");
  const TshirtName =
    item.parentElement.parentElement.getElementsByClassName("card-title")[0]
      .innerText;

  appendNewOrodectToTheCart(imgSrc, TshirtName, price);
};

onlineProducts.forEach((productArea) => {
  // at the product area check if the button is buy
  productArea.addEventListener("click", (eo) => {
    if (eo.target.classList.contains("buy")) {
      onBuyClick(eo.target);
    }
  });
});

// calculate total price
const getProductPrice = (_price, _quantity) => {
  return _price * _quantity;
};

let price,
  pQuantity = 0;
let myAddedProducts;

const updateTotalPrice = () => {
  myAddedProducts = document.querySelectorAll(".item-container");

  let totalSum = 0;
  myAddedProducts.forEach((item) => {
    price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );
    pQuantity = Number(
      item
        .getElementsByClassName("cquantity")[0]
        .getElementsByTagName("input")[0].value
    );

    totalSum += getProductPrice(price, pQuantity);
  });

  totalPrice.innerText = ` $ ${totalSum}`;
};

// when click on showProducts button
showProducts.addEventListener("click", (eo) => {
  eo.target.parentElement.nextElementSibling.style.transform = "translateX(0)";

  updateTotalPrice()
});


// black Screen change
blackScreen.addEventListener("change" , updateTotalPrice)


// when click on cross ( close the current page and return to the main page)
cross.addEventListener("click", (eo) => {
  cross.parentElement.style.transform = "translateX(-110vw)";
});




// when delete item 
const  updateBuyBtn = (nameOfProduct) => {
  onlineProducts.forEach(item => {
  
    if(item.getElementsByClassName("card-title")[0].innerText ===  nameOfProduct )
    {
      const buyBtn = item.getElementsByClassName("buy")[0];
      buyBtn.removeAttribute("disabled")
      buyBtn.innerText = "Buy"
      buyBtn.classList.add("btn-primary");
      buyBtn.classList.remove("btn-success");
    }

  });


}


blackScreen.addEventListener("click" , (eo) => {
  
  if(eo.target.classList.contains("btn-danger")) {

    const parent =  eo.target.parentElement

  // get the unique value that helps us for removing the parent
  const nameOfProduct = parent.getElementsByClassName("shirt-name")[0].innerText

  // remove parent
  parent.remove()

  // update total price
  updateTotalPrice()

  updateBuyBtn(nameOfProduct)
  }


})



// const del = document.getElementById("del")

// del.addEventListener("click", (eo) => {

//   const parent =  eo.target.parentElement
//   console.log(parent);

//   // get the unique value that helps us for removing the parent
//   const shirtName = parent.getElementsByClassName("shirt-name")[0].innerText

//   // remove parent
//   parent.remove()

//   // update total price
//   updateTotalPrice()

//   updateBuyBtn(shirtName)
// })