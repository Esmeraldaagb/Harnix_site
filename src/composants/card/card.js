"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card = ({ image, title, description, buttonLabel, onButtonClick }) => {
    return (react_1.default.createElement("div", { className: "max-w-sm rounded overflow-hidden shadow-lg bg-white" },
        react_1.default.createElement("img", { className: "w-full h-48 object-cover", src: image, alt: title }),
        react_1.default.createElement("div", { className: "px-6 py-4" },
            react_1.default.createElement("h2", { className: "text-xl font-semibold mb-2" }, title),
            react_1.default.createElement("p", { className: "text-gray-700 text-base" }, description)),
        react_1.default.createElement("div", { className: "px-6 py-4" },
            react_1.default.createElement("button", { onClick: onButtonClick, className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" }, buttonLabel))));
};
exports.default = Card;
