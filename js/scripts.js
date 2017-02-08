ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323000],
            zoom: 17,
            controls: [],
            scroll: false
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Nerds',

        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/myicon.png',
            // Размеры метки.
            iconImageSize: [155, 200],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50,-199]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});