"use strict";
exports.__esModule = true;
var Linked = /** @class */ (function () {
    function Linked() {
        this.head = null;
        this.tail = null;
    }
    Linked.prototype.getSize = function () {
        var begin = this.head;
        var contador = 1;
        if (this.head == null) {
            contador--;
            return contador;
        }
        else {
            while (begin.getNext() != null) {
                contador++;
                begin = begin.getNext();
            }
            return contador;
        }
    };
    Linked.prototype.getSum = function () {
        var node = this.head;
        var contador = 0;
        if (node != null) {
            while (node) {
                contador += node.getValue();
                node = node.getNext();
            }
            return contador;
        }
        else {
            return 'Lista vazia';
        }
    };
    Linked.prototype.areEqual = function (list1, list2) {
        var list1Begin = list1.head;
        var list2Begin = list2.head;
        var trip = true;
        while (list1Begin && list2Begin) {
            if (list1Begin.getValue() == list2Begin.getValue()) {
                list1Begin = list1Begin.getNext();
                list2Begin = list2Begin.getNext();
            }
            else {
                trip = false;
                break;
            }
        }
        return trip;
    };
    Linked.prototype.reversePrint = function (list) {
        var lista = [];
        var node = list.head;
        while (node != null) {
            lista.push(node.getValue());
            node = node.getNext();
        }
        console.log(lista.reverse());
    };
    return Linked;
}());
exports.Linked = Linked;
