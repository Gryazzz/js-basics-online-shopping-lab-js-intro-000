var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({ [item]:itemPrice });
  console.log (`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var l = cart.length;
  var n = 0;
  if (l === 1) {
    console.log(`In your cart, you have ${(Object.keys(cart[0]))} at $${Object.values(cart[0])}.`);
  } else if (!cart.length) {
    console.log ('Your shopping cart is empty.');
  } else if (l === 2) {

  } else if (l > 2) {

  }

}
  /*if (!cart.length); {
    console.log ('Your shopping cart is empty.');
  }

  var vcart = [];
  for (let n = 0; n < l; n++) {
     vcart.push(cart[n]);

   }
  if (l = 0) {
  var answer1 = (`In your cart, you have ${(Object.keys(cart[0]))} at $${Object.values(cart[0])}`);
  console.log (answer1);
  }
  var answer2 = (`and ${(Object.keys(cart[n]))} at $${Object.values(cart[n])}`);
return vcart;
}*/


function total() {
  var sum = 0;
  var n = 0;
  while (n < cart.length) {
    var itemPrice = parseInt(Object.values(cart[n]), 10);
    sum += itemPrice, n++;
  }
  return sum;
}

function removeFromCart(item) {
  var n = 0;
  for (let n = 0; n < cart.length; n++) {
    if (cart[n].hasOwnProperty(item)) {
      cart.splice(n, 1);
      return cart;
    }
  console.log ('That item is not in your cart.');
  return cart;
  }
}


function placeOrder(cardNumber) {
  // write your code here
}
