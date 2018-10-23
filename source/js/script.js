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
    "image": "1372355406_kot_preview.png",
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
    "image": "1372355406_kot_preview.png",
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
    "image": "1372355406_kot_preview.png",
    "volume": "5",
    "unit": "кг",
    "description": "Филе из цыплят с трюфелями в бульоне."
  }]
};

$(document).ready(function () {

  var template = Handlebars.compile($('#template').html());
  $('.content__list').append(template(data));

  /////*************************************************** */

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

    for (var i = 0; i < productItems.length; i++) {
      productItems[i].addEventListener("click", onProductClick);
      productItems[i].addEventListener("mouseenter", onProductMouseEnter);
      productItems[i].addEventListener("mouseleave", onProductMouseLeave);
      buyLinks[i].addEventListener("click", onBuyLinkClick);
    }
  }

  eventInit();

});
