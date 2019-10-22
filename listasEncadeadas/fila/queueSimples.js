"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var linked_1 = require("../linked");
var Fila = /** @class */ (function (_super) {
    __extends(Fila, _super);
    function Fila() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fila.prototype.push = function (novoNode) {
        if (this.head == null) {
            this.head = novoNode;
            this.tail = novoNode;
        }
        else {
            this.tail.setNext(novoNode);
            this.tail = novoNode;
        }
    };
    Fila.prototype.isEmpty = function () {
        if (this.head == null) {
            return true;
        }
        else {
            return false;
        }
    };
    Fila.prototype.pop = function () {
        this.head = this.head.getNext();
    };
    return Fila;
}(linked_1.Linked));
exports.Fila = Fila;
