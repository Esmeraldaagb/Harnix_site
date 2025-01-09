"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Caroussel;
const react_1 = __importDefault(require("react"));
const caroussel1_jpeg_1 = __importDefault(require("../../assets/caroussel1.jpeg"));
const caroussel2_png_1 = __importDefault(require("../../assets/caroussel2.png"));
const caroussel3_png_1 = __importDefault(require("../../assets/caroussel3.png")); // Importez la troisième image
const card_1 = __importDefault(require("../card/card"));
const react_2 = require("swiper/react");
// Import Swiper styles
require("swiper/css");
require("swiper/css/pagination");
// Import required modules
const modules_1 = require("swiper/modules");
function Caroussel() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Swiper, { spaceBetween: 30, centeredSlides: true, autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            }, pagination: {
                clickable: true,
            }, modules: [modules_1.Autoplay], className: "mySwiper mt-6", breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 1,
                },
            } },
            react_1.default.createElement(react_2.SwiperSlide, null,
                react_1.default.createElement(card_1.default, { image: caroussel1_jpeg_1.default, className: 'w-full', imageClassName: 'w-[80%] h-64 m-[8%] rounded-2xl' // Définissez la hauteur ici
                 })),
            react_1.default.createElement(react_2.SwiperSlide, null,
                react_1.default.createElement(card_1.default, { image: caroussel2_png_1.default, className: 'w-full', imageClassName: 'w-[80%] h-64 m-[8%] rounded-2xl' // Définissez la hauteur ici
                 })),
            react_1.default.createElement(react_2.SwiperSlide, null,
                react_1.default.createElement(card_1.default, { image: caroussel3_png_1.default, className: 'w-full', imageClassName: 'w-[80%] h-64 m-[8%] rounded-2xl' // Définissez la hauteur ici
                 })))));
}
