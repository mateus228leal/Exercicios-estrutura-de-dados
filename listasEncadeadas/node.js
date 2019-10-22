"use strict";
exports.__esModule = true;
var No = /** @class */ (function () {
    function No(value) {
        this.valor = value;
        this.next = null;
    }
    No.prototype.setNext = function (amarro) {
        this.next = amarro;
    };
    No.prototype.getNext = function () {
        return this.next;
    };
    No.prototype.getValue = function () {
        return this.valor;
    };
    return No;
}());
exports.No = No;
