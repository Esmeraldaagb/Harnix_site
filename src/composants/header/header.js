"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const button_1 = __importDefault(require("../button/button"));
const logo1_png_1 = __importDefault(require("../../assets/logo1.png"));
const wave_svg_1 = __importDefault(require("../../assets/wave.svg"));
// Composant Header
const Header = () => {
    // Tableau de navigation (exemple)
    const navItems = [
        { id: 1, title: "Nos Activités", path: "/activite" },
        { id: 2, title: "Recrutement", path: "/recrutement" },
        { id: 3, title: "Nos Produits", path: "/produit" },
        { id: 4, title: "Communauté", path: "/communaute" },
    ];
    // Fonction pour générer les éléments de navigation à partir du tableau navItems
    const renderNavItems = () => {
        return navItems.map((item) => (react_1.default.createElement("li", { key: item.id },
            react_1.default.createElement("a", { href: item.path, className: "text-sm font-normal font-sans text-white flex justify-center mt-6 mr-6" }, item.title))));
    };
    return (react_1.default.createElement("div", { className: "bg-cover bg-center ", style: { backgroundImage: `url(${wave_svg_1.default})` } },
        react_1.default.createElement("header", { className: "bg-zinc-900 h-20 p-4" },
            react_1.default.createElement("nav", { className: "flex items-center justify-between w-full" },
                react_1.default.createElement("div", { className: 'flex items-center gap-1' },
                    react_1.default.createElement("img", { width: 35, height: 35, src: logo1_png_1.default, alt: "Logo" }),
                    react_1.default.createElement("h2", { className: "font-serif tracking-wide text-white ml-4 uppercase text-2xl" }, "HARNIX")),
                react_1.default.createElement("div", { className: 'flex items-center justify-center md:justify-between' },
                    react_1.default.createElement("ul", { className: "md:flex hidden space-x-4 flex-row" }, renderNavItems()),
                    react_1.default.createElement(button_1.default, { label: "Investir", width: '600', height: '300', className: 'p-3 text-sm font-normal font-sans bg-white rounded-md text-center font-semibold' }))))));
};
exports.default = Header;
