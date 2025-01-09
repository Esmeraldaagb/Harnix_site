"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// App.tsx
const react_1 = __importDefault(require("react"));
const text_1 = __importDefault(require("./composants/text/text"));
const App = () => {
    const handleClick = () => {
        console.log('Bouton cliqué !');
    };
    return (react_1.default.createElement(text_1.default, { title: "Coucou", subtitle: 'Bonsoir' }));
};
exports.default = App;
