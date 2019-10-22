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
var Pilha = /** @class */ (function (_super) {
    __extends(Pilha, _super);
    function Pilha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pilha.prototype.push = function (novoNode) {
        if (this.head == null) {
            this.head = novoNode;
            this.tail = novoNode;
        }
        else {
            novoNode.setNext(null);
            this.tail.setNext(novoNode);
            this.tail = novoNode;
        }
    };
    Pilha.prototype.isEmpty = function () {
        if (this.head == null) {
            return true;
        }
        else {
            return false;
        }
    };
    Pilha.prototype.pop = function () {
        console.log(this.head);
        this.head = this.head.getNext();
    };
    return Pilha;
}(linked_1.Linked));
exports.Pilha = Pilha;
