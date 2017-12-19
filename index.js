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
  var vcart = [];
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else if {
    if (cart.length === 2) {
      console.log(`In your cart, you have${(Object.keys(cart[0]))} at $${Object.values(cart[0])} and ${(Object.keys(cart[1]))} at $${Object.values(cart[1])}.`);
      }
    } else if {
    for (let n = 0; n < cart.length; n++) {
      for (var items in cart[n]) {
      vcart.push(`${items} at $${cart[n][items]}`)
      }
    }
  console.log(`In your cart, you have ${vcart.join(', ')}.`)
   }
}
  /*if (l === 1) {
    console.log(`In your cart, you have ${(Object.keys(cart[0]))} at $${Object.values(cart[0])}.`);
  } else if (!cart.length) {
    console.log ('Your shopping cart is empty.');
  } else if (l === 2) {
    console.log (`In your cart, you have ${(Object.keys(cart[0]))} at $${Object.values(cart[0])} and ${(Object.keys(cart[1]))} at $${Object.values(cart[1])}.`)
  } else if (l > 2) {

  }*/


  /*

  var vcart = [];
  for (let n = 0; n < l; n++) {
     vcart.push(cart[n]);

   }

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
  for (var n = 0; n < cart.length; n++) {
    if (cart[n].hasOwnProperty(item)) {        /*learn more*/
      cart.splice(n, 1);
      return cart;
    }
  }
  return console.log ('That item is not in your cart.');
}


function placeOrder(cardNumber) {
  // write your code here
}
