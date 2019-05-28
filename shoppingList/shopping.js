"use strict";

//anonymous IIFE function
(function() {
  //constructor function Product

  function Product(productName, productPrice, expirationDate) {
    this.name = productName;
    this.id = parseInt(Math.random() * 1e5);
    this.productPrice = parseFloat(productPrice.toFixed(2)); // two decimals
    this.expirationDate = new Date(expirationDate);

  }
      Product.prototype.getInfo = function() {
        var firstLetter = this.name[0].toUpperCase();
        var lastLetter = this.name[this.name.length - 1].toUpperCase();
        var productCode = firstLetter + lastLetter + this.id;
        return productCode + ", " + this.name + ", " + this.productPrice;
      };

  //constructor function ShoppingBag

  function ShoppingBag() {
    this.listOfProducts = [];

  }
      ShoppingBag.prototype.addProduct = function(product) {
        if (!product && !(product instanceof Product)) {
          console.log("Invalid input");
          return; //kao break
        }
        if (product.expirationDate.getTime() > Date.now()) {
          this.listOfProducts.push(product);
        } else {
          console.log("Product has expired");
        }
      };
  
     ShoppingBag.prototype.getAverageProductPrice = function() {
        var averagePrice = this.totalProductPrice() / this.listOfProducts.length;
        return parseFloat(averagePrice.toFixed(3));
      };
  
      ShoppingBag.prototype.totalProductPrice = function() {
        var totalProductPrice = 0;
        var numOfProducts = this.listOfProducts.length;
        this.listOfProducts.forEach(function(product) {
          totalProductPrice += product.price;
        });
        return "Total product price:" + totalProductPrice;
      };
  
      ShoppingBag.prototype.getMostExpensive = function() {
        var sortedProducts = this.listOfProducts.slice();
        sortedProducts.sort(function(currentProduct, nextProduct) {
          return currentProduct.price - nextProduct.price;
        });
  
        var expensiveProduct = sortedProducts[sortedProducts.length - 1];
  
        return expensiveProduct.getInfo();
      };

  //constructor function PaymentCard

  function PaymentCard(balance, validationDate) {
    this.balance = parseFloat(balance);
    this.date = new Date(validationDate);
  }
      PaymentCard.prototype.isActive = function() {
        return this.date.getTime() > Date.now();
      };

  //checkoutAndBuy
  function checkoutAndBuy(shoppingBag, card) {
    var haveEnoughMoney = card.balance > shoppingBag.totalProductPrice();

    if (card.isActive() && haveEnoughMoney) {
      card.balance -= shoppingBag.totalProductPrice(); //reduce account balance
      console.log("Success Buy");
      console.log("Total cost " + shoppingBag.totalProductPrice());
      console.log("Remaining balance " + card.balance);
    } else {
      console.log("Unable to finish shopping");
    }
  }

  // products
  var driedTomatoes = new Product("Dried Tomatoes", 456.78, "8/17/2019");
  var cheese = new Product("Cheese", 332.89, "9/29/2019");
  var oliveOil = new Product("Olive Oil", 854.56, "5/15/2020");
  var nut = new Product("Nut", 256.31, "11/29/2019");

  //shopping bag
  var shoppingBag = new ShoppingBag();

  //add products to shopping bag
  shoppingBag.addProduct(driedTomatoes);
  shoppingBag.addProduct(cheese);
  shoppingBag.addProduct(oliveOil);
  shoppingBag.addProduct(nut);

  //payment card
  var masterCard = new PaymentCard(7721.33, "1/31/2021");
  // var visa = new PaymentCard(37.99, "12/27/2020");

  console.log(shoppingBag.getMostExpensive());
  checkoutAndBuy(shoppingBag, masterCard);
})();
