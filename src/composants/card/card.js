"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card = ({ image, className, title, description, buttonLabel, imageClassName, onButtonClick }) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("img", { src: image, className: `object-cover rounded-lg ${imageClassName}` }),
        title && react_1.default.createElement("h3", { className: "text-lg font-semibold" }, title),
        description && react_1.default.createElement("p", { className: "text-sm" }, description),
        buttonLabel && (react_1.default.createElement("button", { onClick: onButtonClick, className: "mt-2 bg-blue-500 text-white rounded px-4 py-2" }, buttonLabel))));
};
exports.default = Card;
