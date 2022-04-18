ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76202219711712,37.61095663760373],
        zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.76202219711712,37.61095663760373], {}, {
      iconLayout: 'default#image',
      iconImageHref: "img/connection/Metka.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
  });

    myMap.geoObjects.add(myPlacemark);


    // myMap.controls.remove('geolocationControl'); // удаляем геолокацию
     myMap.controls.remove('searchControl'); // удаляем поиск
    // myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    // myMap.controls.remove('typeSelector'); // удаляем тип
    // myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // myMap.controls.remove('rulerControl'); // удаляем контрол правил
     myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
