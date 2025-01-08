"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// App.tsx
const react_1 = __importDefault(require("react"));
const header_1 = __importDefault(require("./composants/header/header"));
const App = () => {
    const handleClick = () => {
        console.log('Bouton cliqué !');
    };
    return (react_1.default.createElement(header_1.default, null));
};
exports.default = App;
