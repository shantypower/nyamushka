'use strict';

var json = {
  "product-item": [{
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
    "title": "Сказочное заморское яство",
    "brand": "Нямушка",
    "sort": "с рыбой",
    "mesure-quantity": 40,
    "mesure": "порций",
    "bonus-quantity": "",
    "bonus": "2 мыши в подарок",
    "review": "",
    "image": "1372355406_kot_preview.png",
    "volume": "0,5",
    "unit": "кг",
    "description": "Головы щучьи с чесноком да свежайшая сёмгушка."
  }]
};

var source = document.getElementById("#template").html();
var template = Handlebars.compile(source);

