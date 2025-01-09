"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Text = ({ title, subtitle, className }) => {
    return (react_1.default.createElement("div", { className: className },
        title && react_1.default.createElement("h2", { className: "text-xl font-bold" }, title),
        subtitle && react_1.default.createElement("h3", { className: "text-lg text-gray-400" }, subtitle)));
};
exports.default = Text;
