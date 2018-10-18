  var data = {
    "card-item": [{
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
      "volume": "2",
      "unit": "кг",
      "description": "Головы щучьи с чесноком да свежайшая сёмгушка."
    },
    {
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
