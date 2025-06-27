const addProductButton = document.getElementById('add-product');
const totalPriceSpan = document.getElementById('total-price');
let totalPrice = 0;
//add product to cart

addProductButton.addEventListener('click', (event) => {
  const productNameInput = document.getElementById('product-name').value;
  const productPriceInput = document.getElementById('product-price').value;
  const ul = document.getElementById('cart');
  const li = document.createElement('li');

  li.innerHTML = `
        Product Name: ${productNameInput} , 
        Prodcut Price: <input type="text" id="productprice" value="${productPriceInput}">
        <button id="rm-btn" onclick="removeItem(event)">Remove</button>
      `;
  ul.appendChild(li);

  updateTotalPrice(parseInt(productPriceInput));
})

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  //totalPriceSpan.textContent = totalPrice.toFixed(2);
  totalPriceSpan.textContent = totalPrice;
}
 
// Function to remove an item
function removeItem(event) {
  const rmButton = document.getElementById('rm-btn');
  const rmPriceAmt = document.getElementById('productprice').value;
  const item = event.target.closest('li');
  updateTotalPrice(-parseInt(rmPriceAmt));
  item.remove();
}