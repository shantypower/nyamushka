  var data = {
    "card-item": [{
      "id": "foie-gra",
      "title": "Сказочное заморское яство",
      "brand": "Нямушка",
      "sort": "с фуа-гра",
      "mesure-quantity": 10,
      "mesure": "порций",
      "bonus-quantity": "",
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
      "bonus-quantity": "",
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
      "bonus-quantity": "5",
      "bonus": "мышей в подарок",
      "review": "заказчик доволен",
      "image": "1372355406_kot_preview.png",
      "volume": "5",
      "unit": "кг",
      "description": "Филе из цыплят с трюфелями в бульоне."
    }]
  };

  $(document).ready(function(){

    var template = Handlebars.compile( $('#template').html() );
    $('.content__list').append( template(data) );

    });

    //var product = document.querySelector(".item-card__wrapper");

    var checkbox = document.querySelector(".item-card__checkbox");

    var onProductClick = function(evt) {
     var product = evt.currentTarget.parentNode;

      if (!checkbox.hasAttribute("checked") && !checkbox.hasAttribute("disabled")) {
        checkbox.setAttribute("checked", "checked");
      } else {
        checkbox.removeAttribute("checked");
        product.classList.remove("item-card__wrapper--selected");
      }
    };

    var onProductMouseLeave = function(evt) {
     var product = evt.currentTarget.parentNode;

      if (checkbox.checked && !product.classList.contains("item-card__wrapper--selected")) {
        product.classList.add("item-card__wrapper--selected");
      }
    };

    var onProductLinkClick = function(evt) {
      var product = evt.currentTarget.parentNode.parentNode.parentNode;
      product.classList.add("item-card__description--selected");
      checkbox.setAttribute("checked", "checked");
    };

    var productsItems = document.querySelectorAll(".item-card__wrapper");
    var buyLinks = document.querySelectorAll(".item-card__description--available");

    for (var i = 0; i < productsItems.length; i++) {
      productsItems[i].addEventListener("click", onProductClick);
      productsItems[i].addEventListener("mouseleave", onProductMouseLeave);
      buyLinks[i].addEventListener("click", onProductBuyLinkClick);
    }

