# Level I 

### Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения

#### - пользователя;
#### - менеджера проекта;
#### - дизайнера;
#### - верстальщика;
#### - клиентского программиста;
#### - серверного программиста. 

Обычно пользователь даже и не ведает о том, что такое верстка, но ему точно важно, чтобы сайт был максимально ему удобен для использования:
 - удобный читабельный шрифт;
 - приятные цвета;
 - красивый дизайн;
 - понятная навигация;
 - удобные фильтры;
 - адекватно работающие элементы;
 - скорость загрузки;

Менеджер проекта будет смотреть на все тонкости в целом: верстка должна устраивать всех (начиная с заказчика и вплоть до конечного пользователя).
Будет смотреть на все тонкости вплоть до запятой и, конечно же, думать о будущем проекта (его дальнейшей поддержке и развитии).
Все должно быть логично, удобно, "крепко", читабельно, понятно, аккуратно.

Не знаю, как на самом деле работают дизайнеры и очем они там думают (не была на их месте), но предположу, что они владея основами HTML и CSS будут думать о том, чтобы та красота, которую они создатут могла бы быть реализована верстальщиком посредством всех доступных ныне возможностей современных стандартов, техник. И все это должно быть не только красиво, но и, самое главное, удобно пользователю (удобное расположение блоков, понятная навигация, адекватные размеры кнопочек  и т.д.)

Верстальщику важно, чтобы его хорошая верстка работала надежна в требуемых браузерах и прожила как можно дольше с течением времни и не развалилась при дальнейшей поддержке!

Клиентский программист будет благодарен верстальщику за подготовленные стили для интерактивных элементов и понятные названия классов, за понятную структуру и понятный код.

Честно не знаю, что там хотел бы видеть хорошего в верске серверный программист. Я не знаю всех тонкостей его работы. Может ему важна структура проекта: структура папок, именование файлов, оптимизация.

### Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.

У меня почти нет опыта. Я не делала многостраничники. Но смею предположить, что когда проект большой, то необходимо единообразие, чтобы можно было легко менять повторяющиеся блоки, переиспользовать их. Продуманная структура должна позволять легко наполнять сайт постоянно меняющимся контентом.
 
 
**Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.**

На практике применяла AJAX для погрузки данных в проект со стороннего сервера.
Для быстрого наполнения контентом также использовала Handlebars для загрузки данных из JSON.
Для переиспользования блоков html использовала встроенные хэлперы в Zurb Foundation.
Использую методологию БЭМ (удобно верстать проект по отдельным блокам и переиспользовать, легко ориентироваться в проекте).
Из инструментов: препроцессор SASS и сборщик GULP.
Умею собирать SVG спрайты и использовать адаптивную графику для устройств с ретиной. 
 
### Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

Делала пару адаптивных проектов. Верстку проверяла через инструменты разработчика в браузере, где можно эмулировать разные устройства. Также можно посмотреть как сайт будет выглядеть на разных устройствах через сервис http://browsershots.org 
 
### Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.
Немало делает сборщик GULP: компилирует, минифицирует, сжимает, собирает и раскладывает все по нужным папкам. Делает локальный сервер для моментального отображения изменений сайта в браузере. Использую VS Code. Там все под рукой: плагины для наведения красоты в коде, встроенный терминал и git.
 
 
### Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике? 

Нет. Такого не было. На учебе для тех, кто на Windows не требовалась поддержка Safari. А IE на Windows не проблема (пробую менять свойства через инструменты разработчика).
 
### Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия? 

Сначала спрошу, если есть возможность связаться с дизайнером, а вдруг стайлгайд не тот или его забыли положить. Если нет, то надо будет продумать это самому и внести предложения на согласование ответсвенному за финальную проверку и сдачу проекта (сделать, например, в отдельной ветке).

### Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).

- *[habr.com](https://habr.com/)*
- *[webdesign-master.ru](https://webdesign-master.ru/)*
- *[css-tricks.ru](http://www.css-tricks.ru/)*
- *[developer.mozilla.org](https://developer.mozilla.org/ru/)*
- *[javascript.ru](http://javascript.ru/)*
- *[true-coder.ru](https://true-coder.ru/)*
- *[proglib.io](https://proglib.io/)*
- *[webref.ru](https://webref.ru/)*

- *[htmlacademy.ru/blog]( https://htmlacademy.ru/blog/tags/%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D0%B0%D1%8F%20%D1%80%D0%B0%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0)*
- *[htmlacademy.ru/blog/tags](https://htmlacademy.ru/blog/tags/%D1%81%D1%82%D0%B0%D1%82%D1%8C%D0%B8)*

 
**Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или и то, и другое?**

И то и другое, но знаний по JS пока маловато. Не хватает практики, а голую теорию читать малополезно. Надо сразу применять.
  
Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны? 

Мне нравится изучать иностранные языки. До фронтенда занималась самостоятельным изучением английского и итальянского языков. Наврное поэтому команды, теги, правила легко запоминаются.

### Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами. 

Я - выпускник физико-математического факультета педуниверситета (математика и информатика). Но работать в школе не захотелось. Хотела быть программистом, но тогда не было денег на обучение. Пошла работать в торговлю. Прошла путь от продавца до директора магазина. Но чувствуя, что все это не моё, вернулась на путь программирования и разработки. Душа сразу порадовалась )))
Но пока проблема: зеленые новички почти никому не нужны. Хочется учиться прямо "в цеху", нарабатывать опыт, прокачивать скилл...
Желание, интерес есть огромные.

Ваше тестовое (билд):
 * https://shantypower.github.io/nyamushka_build/

Самостоятельная работа (тестовое для тренировки):
 * https://shantypower.github.io/markup/

Учебные: 
 * https://shantypower.github.io/pink2/
 * https://shantypower.github.io/gllacy/
 * https://shantypower.github.io/keksobooking/

