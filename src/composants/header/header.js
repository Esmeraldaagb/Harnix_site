"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const button_1 = __importDefault(require("../button/button"));
const logo1_png_1 = __importDefault(require("../../assets/logo1.png"));
const wave_svg_1 = __importDefault(require("../../assets/wave.svg"));
const caroussel_1 = __importDefault(require("../caroussel/caroussel"));
const Header = () => {
    const [isNavOpen, setIsNavOpen] = (0, react_1.useState)(false);
    const navItems = [
        { id: 1, title: "Nos Activités", path: "/activite" },
        { id: 2, title: "Recrutement", path: "/recrutement" },
        { id: 3, title: "Nos Produits", path: "/produit" },
        { id: 4, title: "Communauté", path: "/communaute" },
    ];
    const renderNavItems = () => {
        return navItems.map((item) => (react_1.default.createElement("li", { key: item.id },
            react_1.default.createElement("a", { href: item.path, className: "text-sm font-normal font-sans text-white flex justify-center p-2 transition duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-lg rounded" }, item.title))));
    };
    return (react_1.default.createElement("div", { className: "relative" },
        react_1.default.createElement("div", { className: "bg-cover bg-center", style: { backgroundImage: `url(${wave_svg_1.default})` } },
            react_1.default.createElement("header", { className: "bg-zinc-900 h-20 p-4 fixed top-0 left-0 right-0 z-50" },
                react_1.default.createElement("nav", { className: "flex items-center justify-between w-full relative" },
                    react_1.default.createElement("div", { className: "flex items-center gap-1" },
                        react_1.default.createElement("img", { width: 35, height: 35, src: logo1_png_1.default, alt: "Logo" }),
                        react_1.default.createElement("h2", { className: "font-serif text-white ml-4 uppercase text-2xl" }, "HARNIX")),
                    react_1.default.createElement("button", { onClick: () => setIsNavOpen(!isNavOpen), className: "md:hidden p-3" }, isNavOpen ? (react_1.default.createElement("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))) : (react_1.default.createElement("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16m-7 6h7" })))),
                    react_1.default.createElement("div", { className: `absolute top-20 left-0 w-full bg-zinc-900 rounded-md shadow-lg md:static md:flex md:justify-end ${isNavOpen ? 'block' : 'hidden'}` },
                        react_1.default.createElement("ul", { className: "flex md:flex-row flex-col md:space-x-4 space-y-2 md:space-y-0 justify-end" }, renderNavItems()),
                        react_1.default.createElement(button_1.default, { label: "Investir", width: "600", height: "300", className: "p-3 text-sm font-normal font-sans bg-white rounded-md text-center font-semibold ml-4" })))),
            react_1.default.createElement(caroussel_1.default, null))));
};
exports.default = Header;
