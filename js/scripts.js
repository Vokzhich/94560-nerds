
/*Global variables*/
var link = document.querySelector(".modal-on-button");
var popup = document.querySelector(".modal-container-holder");
var closeButton = popup.querySelector(".close-button-modal");
var modalName = popup.querySelector("[name=name]");
var modalEmail = popup.querySelector("[name=email]");
var modalText = popup.querySelector("[name=text]");
var formModal = popup.querySelector("#modal-form");
var formElements = formModal.querySelector("[type=text]");
/*Global variables*/

/*Yandex maps*/
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.939000, 30.319222],
            zoom: 17,
            controls: [],
            scroll: false
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.938631, 30.321239], {
            hintContent: 'Nerds',

        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/myicon.png',
            iconImageSize: [155, 200],
            iconImageOffset: [-50,-199]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
});
/*Yandex maps*/


/*Modal window opener*/
link.addEventListener("click",function(event) {
    event.preventDefault();
    popup.classList.add("modal-container-on");
    modalName.focus();
});

closeButton.addEventListener("click",function(event) {
    event.preventDefault();
    popup.classList.remove("modal-container-on");
});
/*Modal window opener*/


/*Modal window form validation*/
    formModal.addEventListener("submit", function(event) {
       event.preventDefault();
       if (this.querySelector("[name=name]").value == "") {
            this.querySelector("[name=name]").classList.add("error");
       }else if (this.querySelector("[name=name]").value) {
            this.querySelector("[name=name]").classList.remove("error");
       };
       if (this.querySelector("[name=email]").value == "") {
            this.querySelector("[name=email]").classList.add("error");
       }else if (this.querySelector("[name=email]").value) {
            this.querySelector("[name=email]").classList.remove("error");
       };
    });
/*Modal window form validation*/


