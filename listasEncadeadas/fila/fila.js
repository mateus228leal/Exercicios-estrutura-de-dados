"use strict";
exports.__esModule = true;
var queueSimples_1 = require("./queueSimples");
var node_1 = require("../node");
var linked_1 = require("../linked");
var queue1 = new queueSimples_1.Fila();
var ok = new queueSimples_1.Fila();
var linked = new linked_1.Linked();
queue1.push(new node_1.No(6));
queue1.push(new node_1.No(7));
queue1.push(new node_1.No(8));
ok.push(new node_1.No(6));
ok.push(new node_1.No(7));
ok.push(new node_1.No(8));
console.log(linked.areEqual(queue1, ok));