import {
	exit,
	db,

} from './controller/firebase.js';

export const getName = (user) => {
			return db().collection('users').doc(user.uid).get()
				.then((doc) => {
					return doc.data().name;
				})
};

export const exitUser = () => {
	return exit()
};

export const changeRoute = (route) => {
	location.hash = route;
};

var ShoppingCart = (function($) {
	"use strict";
	
	// Cahce necesarry DOM Elements
	var productsEl = document.querySelector(".products"),
		cartEl =     document.querySelector(".shopping-cart-list"),
		productQuantityEl = document.querySelector(".product-quantity"),
		emptyCartEl = document.querySelector(".empty-cart-btn"),
		cartCheckoutEl = document.querySelector(".cart-checkout"),
		totalPriceEl = document.querySelector(".total-price");
	
	// Fake JSON data array here should be API call
	
		productsInCart = [];

	
	// Like one before and I have also used ES6 template strings
	var generateCartList = function() {
	  
	  cartEl.innerHTML = "";
	  
	  productsInCart.forEach(function(item) {
		var li = document.createElement("li");
		li.innerHTML = `${item.quantity} ${item.product.name} - $${item.product.price * item.quantity}`;
		cartEl.appendChild(li);
	  });
	  
	  productQuantityEl.innerHTML = productsInCart.length;
	  
	  generateCartButtons()
	}
	
	
	// Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
	var generateCartButtons = function() {
	  if(productsInCart.length > 0) {
		totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
	  } else {
		'';
	  }
	}
	
	// Setting up listeners for click event on all products and Empty Cart button as well
	var setupListeners = function() {
	  productsEl.addEventListener("click", function(event) {
		var el = event.target;
		if(el.classList.contains("add-to-cart")) {
		 var elId = el.dataset.id;
		 addToCart(elId);
		}
	  });
	  
	  emptyCartEl.addEventListener("click", function(event) {
		if(confirm("Are you sure?")) {
		  productsInCart = [];
		}
		generateCartList();
	  });
	}
	
	// Adds new items or updates existing one in productsInCart array
	var addToCart = function(id) {
	  var obj = products[id];
	  if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
		productsInCart.push({product: obj, quantity: 1});
	  } else {
		productsInCart.forEach(function(item) {
		  if(item.product.id === obj.id) {
			item.quantity++;
		  }
		});
	  }
	  generateCartList();
	}
	
	
	// This function checks if project is already in productsInCart array
	var productFound = function(productId) {
	  return productsInCart.find(function(item) {
		return item.product.id === productId;
	  });
	}
  
	var calculateTotalPrice = function() {
	  return productsInCart.reduce(function(total, item) {
		return total + (item.product.price *  item.quantity);
	  }, 0);
	}
	
	// This functon starts the whole application
	var init = function() {
	  generateProductList();
	  setupListeners();
	}
	
	// Exposes just init function to public, everything else is private
	return {
	  init: init
	};
	
	// I have included jQuery although I haven't used it
  })(jQuery);
  
  ShoppingCart.init();