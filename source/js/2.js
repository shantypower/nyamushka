
var handleProductClick = function(evt) {
  var product = evt.currentTarget.parentNode;
  var checkbox = product.querySelector(".product__checkbox");
  if (!checkbox.hasAttribute("checked") && !checkbox.hasAttribute("disabled")) {
    checkbox.setAttribute("checked", "checked");
  } else {
    checkbox.removeAttribute("checked");
    product.classList.remove("product--selected");
  }
};

var handleProductMouseLeave = function(evt) {
  var product = evt.currentTarget.parentNode;
  var checkbox = product.querySelector(".product__checkbox");
  if (checkbox.checked && !product.classList.contains("product--selected")) {
    product.classList.add("product--selected");
  }
};

var handleProductBuyLinkClick = function(evt) {
  var product = evt.currentTarget.parentNode.parentNode.parentNode;
  var checkbox = product.querySelector(".product__checkbox");
  product.classList.add("product--selected");
  checkbox.setAttribute("checked", "checked");
};

var productsList = document.querySelectorAll(".product__frame-wrapper");
var buyLink = document.querySelectorAll(".product__buy");

for (var i = 0; i < productsList.length; i++) {
  productsList[i].addEventListener("click", handleProductClick);
  productsList[i].addEventListener("mouseleave", handleProductMouseLeave);
  buyLink[i].addEventListener("click", handleProductBuyLinkClick);
}
