const addProductButton = document.getElementById('add-product');
const totalPriceSpan = document.getElementById('total-price');
const errorMsg = document.getElementById('errorMsg')
let totalPrice = 0;

//add product to cart
addProductButton.addEventListener('click', (event) => {
  const productNameInput = document.getElementById('product-name').value;
  const productPriceInput = document.getElementById('product-price').value;
  if(productNameInput ==="" ||  productPriceInput === ""){
    errorMsg.textContent = "Enter valid input to add items to cart!";
  }else{
    errorMsg.textContent = "";
    const cart = document.getElementById('cart');
    const cartItems = document.createElement('li');
    cartItems.innerHTML = `
          <div class="itemcontainer">
            <labal> Product Name: </label>
            <label> ${productNameInput} </label>, 
            <labal> Product Cost: $ </label>
            <span> ${productPriceInput} </span>
            <button id="rm-btn" onclick="removeItem(event)">Remove</button>
          </div>
        `;
    cart.appendChild(cartItems);
    updateTotalPrice(parseInt(productPriceInput));
  }
})

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice = totalPrice + amount;
  totalPriceSpan.textContent = totalPrice;
}
 
// Function to remove an item
function removeItem(event) {
  errorMsg.textContent = "";
  const rmButton = document.getElementById('rm-btn');
  const rmcartContainer = event.target.closest('.itemcontainer');
  const rmgetSpanAmt = rmcartContainer.querySelector('span');
  const rmPriceAmt = rmgetSpanAmt.textContent;
  const item = event.target.closest('li');
  //alert(rmPriceAmt);
  updateTotalPrice(-parseInt(rmPriceAmt));
  item.remove();
}