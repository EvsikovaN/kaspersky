document.addEventListener("DOMContentLoaded", function () {
//Появление меню при скроле
    let scrollPos = 0;
    $(window).scroll(function () {
        let st = $(this).scrollTop();
        let posKaspersky = $("div.kaspersky").offset().top;
        let controlPos = posKaspersky - 300;


        let sliderPos = $("div.examples").offset().top;
        let controlPosSlider = sliderPos - 200;

        if (st > scrollPos) {
            document.querySelector(".hide-menu").style.cssText = "display: block;";
            document.querySelector(".hide-menu").classList.add("visible-menu");
        } else if (scrollPos < 250) {
            document.querySelector(".hide-menu").style.cssText = "display: block;";
            document.querySelector(".hide-menu").classList.add("visible-menu");
        } else {
            document.querySelector(".hide-menu").classList.remove("visible-menu");
        }

        //анимация блока Kaspersky
        if (window.innerWidth > 540) {
            if (scrollPos > controlPos) {
                document.querySelector(".kaspersky").classList.add("kaspersky2");
                document.querySelector("#download_link").style.cssText = "color: #ffffff;";
                document.querySelector(".wrap-change").style.cssText = "opacity: 0;";
                document.querySelector(".wrap-change2").style.cssText = "opacity: 1;";
                document.querySelector(".wrap-change3").style.cssText = "opacity: 1;";
                document.querySelector("#change-color-logo-path").style.cssText = "fill: #A7EDDF;"
                document.querySelector(".icon-icon_link").classList.add("icon-icon_link-white");
                document.querySelector(".wrap-change2").classList.add("non_active-logo");
            }
            if (scrollPos < controlPos) {
                document.querySelector(".kaspersky").classList.remove("kaspersky2");
                document.querySelector("#download_link").style.cssText = "color: #00A88E;";
                document.querySelector(".wrap-change").style.cssText = "opacity: 1;";
                document.querySelector(".wrap-change2").style.cssText = "opacity: 0;";
                document.querySelector(".wrap-change3").style.cssText = "opacity: 0;";
                document.querySelector("#change-color-logo-path").style.cssText = "fill: #ffffff;"
                document.querySelector(".icon-icon_link").classList.remove("icon-icon_link-white");

            }
        }

        if (window.innerWidth <= 540) {
            document.querySelector(".kaspersky").classList.add("kaspersky2");
            document.querySelector("#download_link").style.cssText = "color: #ffffff;";
            document.querySelector(".wrap-change").style.cssText = "opacity: 0;";
            document.querySelector(".wrap-change2").style.cssText = "opacity: 1;";
            document.querySelector(".wrap-change3").style.cssText = "opacity: 0;";
            //document.querySelector(".mine-logo").style.cssText = "background-image: url(\"http://evsikova.sandbox.we.vpene.ru/Landing/Kaspersky/image/logo-white.png\");";
            document.querySelector(".icon-icon_link").classList.add("icon-icon_link-white");
        }

        //Появление слайдера из фейда
        if (scrollPos > controlPosSlider) {
            let slider = document.getElementById("slider");
            TweenLite.to(slider, 1.5, {opacity: "1", transform: "matrix(1,0,0,1,0,0)"});
        }
        if (scrollPos < controlPosSlider) {
            let slider = document.getElementById("slider");
            TweenLite.to(slider, 1.5, {opacity: "0", transform: "matrix(1,0,0,1,0,200)"});
        }

        //Появление кнопки слайдера
        if (scrollPos > controlPosSlider) {
            let slider = document.getElementsByClassName("controls");
            TweenLite.to(slider, 1.5, {opacity: "1", transform: "matrix(1,0,0,1,0,0)"});
        }
        if (scrollPos < controlPosSlider) {
            let slider = document.getElementsByClassName("controls");
            TweenLite.to(slider, 1.5, {opacity: "0", transform: "matrix(1,0,0,1,0,200)"});
        }

        scrollPos = st;
    });

//Наведение на блок с видео
    function videoPreviewOver() {
        document.querySelector(".video__preview").addEventListener("mouseover", function () {
            document.querySelector(".video__preview__button").classList.toggle("video__preview__button__hover");
            document.querySelector(".play__svg").classList.toggle("play__svg__hover");
        });
    }

    function videoPreviewOut() {
        document.querySelector(".video__preview").addEventListener("mouseout", function () {
            document.querySelector(".video__preview__button").classList.toggle("video__preview__button__hover");
            document.querySelector(".play__svg").classList.toggle("play__svg__hover");
        });
    }

//Наведение на кнопку Play
    function buttonVideoPreviewOver() {
        document.querySelector(".video__preview__button").addEventListener("mouseover", function () {
            document.querySelector(".video__preview__button").classList.toggle("video__preview__button__active");
            document.querySelector(".play__path").classList.toggle("play__path__active");
            document.querySelector(".play__svg").classList.toggle("play__svg__active");
        })
    }

    function buttonVideoPreviewOut() {
        document.querySelector(".video__preview__button").addEventListener("mouseout", function () {
            document.querySelector(".video__preview__button").classList.toggle("video__preview__button__active");
            document.querySelector(".play__path").classList.toggle("play__path__active");
            document.querySelector(".play__svg").classList.toggle("play__svg__active");
        })
    }

//Нажатие на кнопку Play
    function playVideo() {
        document.querySelector(".video__preview__button").addEventListener("click", function () {
            document.querySelector(".video__preview").style.cssText = "display: none;";
            document.querySelector(".video__block").style.cssText = "display: block;";
            document.querySelector("#video").play();
        });
    }

//Анимация на карточки в хедере
    let requested_arr_cards = document.querySelectorAll(".requested__cards__item");

    requestedCardAnimation();

    function requestedCardAnimation() {
        if (window.innerWidth > 768) {
            for (let i = 0; i < requested_arr_cards.length; i++) {
                requested_arr_cards[i].addEventListener("mouseover", requestedCardsOver);
                requested_arr_cards[i].addEventListener("mouseout", requestedCardsOut)
            }
        }

        if (window.innerWidth <= 768) {
            for (let i = 0; i < requested_arr_cards.length; i++) {
                requested_arr_cards[i].removeEventListener("mouseover", requestedCardsOver);
                requested_arr_cards[i].removeEventListener("mouseout", requestedCardsOut);

            }
        }
    }

    window.addEventListener("resize", function () {
        requestedCardAnimation()
    })

    function requestedCardsOver() {
        this.classList.add("shadow");
        let cards_childrens = this.children;
        cards_childrens[2].style.cssText = "left: 24px;";
        cards_childrens[3].style.cssText = "right: 0;";
    }

    function requestedCardsOut() {
        this.classList.remove("shadow");
        let cards_childrens = this.children;
        cards_childrens[2].style.cssText = "left: -88px;";
        cards_childrens[3].style.cssText = "right: -120px;";
    }

//Анимация на карточки в футере
    let arr_cards = document.querySelectorAll(".design_cards__item");

    designCardAnimation();

    function designCardAnimation() {
        if (window.innerWidth > 768) {
            for (let i = 0; i < arr_cards.length; i++) {
                arr_cards[i].addEventListener("mouseover", designCardsOver);
                arr_cards[i].addEventListener("mouseout", designCardsOut)
            }
        }

        if (window.innerWidth <= 768) {
            for (let i = 0; i < arr_cards.length; i++) {
                arr_cards[i].removeEventListener("mouseover", designCardsOver);
                arr_cards[i].removeEventListener("mouseout", designCardsOut);

            }
        }
    }

    window.addEventListener("resize", function () {
        designCardAnimation()
    })

    function designCardsOver() {
        let video = this.querySelector(".design__video");
        video.play();
    }

    function designCardsOut() {
        let video = this.querySelector(".design__video");
        video.pause()
    }

//Работа слайдера
    function initSlider() {
        const flkty = new Flickity('.carousel', {
            setGallerySize: false,
            pageDots: false,
            wrapAround: true,
            prevNextButtons: false,
        });

        const transformer = new FlickityTransformer(flkty, [
            {
                name: 'translateY',
                stops: [[-500, 70], [0, 150], [500, 0]]
            },
        ])

        /*CONTROLS*/
        $('.examples-slider .controls__mine .controls__left').on('click', function () {
            flkty.previous();
        });

        $('.examples-slider .controls__mine .controls__right').on('click', function () {
            flkty.next();
        });
    }


    videoPreviewOver();
    videoPreviewOut();
    buttonVideoPreviewOver();
    buttonVideoPreviewOut();
    playVideo();
    initSlider()
});
//polyfill position: sticky
stickybits('.layers');

//изометрия
var elem = $(".layer");
var back = $("#back");
var front = $("#front");
var middle = $("#middle");
var img_clock = $("#img_clock");
var img_clock_ten = $("#img_clock_ten");

var controller = new ScrollMagic.Controller();

var tween = new TimelineMax()
    //первый шаг
    .to(elem, 0.5, {scaleX: "0.89", skewY: "-29,6deg"}, "label")
    .to(back, 0.5, {translateX: "-60%",}, "label")
    .to(front, 0.5, {translateX: "60%",}, "label")
    .to(img_clock, 0.5, {width: "60%"}, "label")
    .to(img_clock_ten, 0.5, {scale: "1.2",}, "label");

var tween2 = new TimelineMax()
    //второй шаг слой engineered
    .to(middle, 0.5, {opacity: "0.5", translateX: "-30px",}, "label2")//влево на 30
    .to(back, 0.5, {opacity: "0", translateX: "-70%",}, "label2")//влево на 30 исчезает
    .to(front, 0.5, {translateX: "70%"}, "label2")//вправо на 50
    .to($(".engineered"), 0.5, {opacity: "1"}, "label2")
    .set($(".layer__greed"), {className: "+=layer__greed2"});

var tween3 = new TimelineMax()
    //третий шаг слой engineered
    .to(back, 0.5, {opacity: "1", translateX: "-60%",}, "label3")//вправо на 30 появляется
    .to($(".engineered"), 0.5, {opacity: "0"}, "label3")
    .to(middle, 0.5, {translateX: "0px",}, "label3")//вправо на 30
    .to(front, 0.5, {opacity: "0", translateX: "75%"}, "label3")//вправо на 100 исчезает
    .to($(".immunity"), 0.5, {opacity: "1"}, "label3");

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
})
    .setTween(tween)
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2"
})
    .setTween(tween2)
    .addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: "#trigger3"
})
    .setTween(tween3)
    .addTo(controller);


//анимация главного лого
// var kasp = $(".kaspersky");
// var wrap = $(".wrap-change");
// var wrap2 = $(".wrap-change2");
// var wrap3 = $(".wrap-change3");
// var dow_link = $("#download_link");
// var icon_link = $(".icon-icon_link");
//
// var logo_controller = new ScrollMagic.Controller();
//
// var logo_tween = new TimelineMax()
//     .set(kasp, {className: "+=kaspersky2"}, "leb_logo")
//     .set(icon_link, {className: "+=icon-icon_link-white"}, "leb_logo")
//     .to(dow_link, 0.5, {color: "#ffffff"}, "leb_logo")
//     .to(wrap, 0.5, {opacity: "0;"}, "leb_logo")
//     .to(wrap2, 0.5, {opacity: "1"}, "leb_logo")
//     .to(wrap3, 0.8, {opacity: "1"}, "0.6", "leb2_logo")
//     .to(wrap2, 0.8, {opacity: "0.5"}, "leb2_logo");
//
// var logo_scene = new ScrollMagic.Scene({
//     triggerElement: "#trigger-logo"
// })
//     .setTween(logo_tween)
//     .addTo(logo_controller);
