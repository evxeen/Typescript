"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([4, -3, 11, 2]);
// numbersCollection.sort()
// console.log(numbersCollection.data)
//
// const charactersCollection = new CharactersCollection('ZcxYmab')
// charactersCollection.sort();
// console.log(charactersCollection.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(42);
linkedList.add(20);
linkedList.sort();
linkedList.print();
