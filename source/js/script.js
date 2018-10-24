var data = {
  "card-item": [{
    "id": "foie-gra",
    "title": "Сказочное заморское яство",
    "brand": "Нямушка",
    "sort": "с фуа-гра",
    "mesure-quantity": 10,
    "mesure": "порций",
    "bonus": "мышь в подарок",
    "review": "",
    "image": "cat.png",
    "volume": "0,5",
    "unit": "кг",
    "description": "Печень утки разварная с артишоками."
  }, {
    "id": "fish",
    "title": "Сказочное заморское яство",
    "brand": "Нямушка",
    "sort": "с рыбой",
    "mesure-quantity": 40,
    "mesure": "порций",
    "bonus": "2 мыши в подарок",
    "review": "",
    "image": "cat.png",
    "volume": "2",
    "unit": "кг",
    "description": "Головы щучьи с чесноком да свежайшая сёмгушка."
  },
  {
    "id": "chiken",
    "availability": "disabled",
    "title": "Сказочное заморское яство",
    "brand": "Нямушка",
    "sort": "с курой",
    "mesure-quantity": 100,
    "mesure": "порций",
    "bonus": "5 мышей в подарок",
    "review": "заказчик доволен",
    "image": "cat.png",
    "volume": "5",
    "unit": "кг",
    "description": "Филе из цыплят с трюфелями в бульоне."
  }]
};


$(document).ready(function () {

  // NodeList.prototype.forEach polyfill for IE
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  var template = Handlebars.compile($('#template').html());
  $('.content__list').append(template(data));


  var onProductClick = function (event) {
    var product = event.currentTarget;
    var checkbox = product.previousElementSibling;
    var weight = product.querySelector(".item-card__weight");
    var title = product.querySelector(".item-card__title");
    if (!checkbox.hasAttribute("checked") && !checkbox.hasAttribute("disabled")) {
      checkbox.setAttribute("checked", "checked");
      product.classList.add('item-card__wrapper--selected');
      weight.classList.add("item-card__weight--selected");
    } else {
      checkbox.removeAttribute("checked");
      product.classList.remove('item-card__wrapper--selected');
      weight.classList.remove("item-card__weight--selected");
      title.textContent = "Сказочное заморское яство";
      title.style.color = "#666666"
    }
  }

  var onProductMouseEnter = function (event) {
    var product = event.currentTarget;
    var checkbox = product.previousElementSibling;
    var title = product.querySelector(".item-card__title");
    if (checkbox.checked && product.classList.contains("item-card__wrapper--selected")) {
      title.textContent = "Котэ не одобряет?";
      title.style.color = "#d91667"
    }
  }

  var onProductMouseLeave = function (event) {
    var product = event.currentTarget;
    var title = product.querySelector(".item-card__title");
    if (product.classList.contains("item-card__wrapper--selected")) {
      title.textContent = "Сказочное заморское яство";
      title.style.color = "#666666"
    }
  }

  var onBuyLinkClick = function (event) {
    var product = event.currentTarget.parentNode.parentNode.parentNode.previousElementSibling;
    var checkbox = product.previousElementSibling;
    var weight = product.querySelector(".item-card__weight");
    checkbox.setAttribute("checked", "checked");
    product.classList.add('item-card__wrapper--selected');
    weight.classList.add("item-card__weight--selected");
  }

  var eventInit = function () {
    var productItems = document.querySelectorAll('.item-card__wrapper');
    var buyLinks = document.querySelectorAll('.item-card__link--underline');
    productItems.forEach(function (item) {
      item.addEventListener("click", onProductClick);
      item.addEventListener("mouseenter", onProductMouseEnter);
      item.addEventListener("mouseleave", onProductMouseLeave);
    })

    buyLinks.forEach(function (link) {
      link.addEventListener("click", onBuyLinkClick);
    })
  }

  eventInit();
});
