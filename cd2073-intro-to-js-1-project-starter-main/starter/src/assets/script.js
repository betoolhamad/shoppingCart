/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

//onst { createTestScheduler } = require("jest");
let totalPaid = 0;
const products = [

  {name:'Carton of Cherries',
    price : 4, 
    quantity : 0,
    productId : 100,
    image : 'images/cherry.jpg'
  },  

  {name:'Carton of strawbe',
    price : 5, 
    quantity : 0,
    productId : 101,
    image : 'images/strawberry.jpg'
  },


  {name:'Bag of Oranges',
    price : 10, 
    quantity : 0,
    productId : 102,
    image : 'images/orange.jpg'
  }  
];

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
- addProductToCart should get the correct product based on the productId
- addProductToCart should then increase the product's quantity (I made it)
- if the product is not already in the cart, add it to the cart
*/

const cart = [];

function addProductToCart(productId) {
  const addProduct = products.find((product) => product.productId === productId); // This is array function, where here product argument act as products list! and its return to us the productId that call it
  //find() return the first value in array that satsfiy the expression.. 
  //means if the first item in array === 103 , so the ^  product.productId === productId will applyied as id = 103
  if (cart.includes(addProduct) === true) {
    addProduct.quantity += 1;
  } else {
    cart.push(addProduct);
    addProduct.quantity += 1;
  } 
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  let increaseProduct = products.find((product) => product.productId === productId); //get the correct product based on the productId
  increaseProduct.quantity += 1;}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  let decreaseProduct = products.find((product) => product.productId === productId);
  decreaseProduct.quantity-=1;
  if (decreaseProduct.quantity === 0){
    removeProductFromCart(decreaseProduct.productId);
  }

}
 /* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
  
function removeProductFromCart(productId) {
    let removeProduct = products.find((product) => product.productId === productId);
    removeProduct.quantity = 0;
        if (cart.includes(removeProduct)) {
          //Index = cart.indexOf(removeProduct); 
          cart.splice(cart.indexOf(removeProduct), 1); //indexof to return the position of current product we want to remove
        }
  }

/* Create a function named cartTotal that has no parameters
- cartTotal should iterate through the cart to get the total of all products
- cartTotal should return the sum of the products in the cart
*/

function cartTotal() {
    sum = 0
    for (i = 0; i < cart.length; i++) {
      sum += cart[i].quantity * cart[i].price;
    }
    return sum
  }
  
/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
    for (i = 0; i < cart.length; i++) {
      cart[i].quantity = 0
      cart.splice(i, 1)
    }
  }
  
/* Create a function named pay that takes in an amount as an argument
- pay will return a negative number if there is a remaining balance
- pay will return a positive number if money should be returned to customer
*/

function pay(amount) {
    totalPaid += amount;
    return totalPaid - cartTotal();
  }
  

/* The following is for running unit tests. 
 To fully complete this project, it is expected that all tests pass.
 Run the following command in terminal to run tests
 npm run test
*/

module.exports = {
products,
cart,
addProductToCart,
increaseQuantity,
decreaseQuantity,
removeProductFromCart,
cartTotal,
pay, 
emptyCart,
/* Uncomment the following line if completing the currency converter bonus */
// currency
}

