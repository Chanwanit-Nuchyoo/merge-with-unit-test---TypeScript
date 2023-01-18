"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge = (collection_1, collection_2) => {
    let new_collection = [];
    let i = 0;
    let j = 0;
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            new_collection.push(collection_1[i]);
            i++;
        }
        else {
            new_collection.push(collection_2[j]);
            j++;
        }
    }
    while (i < collection_1.length) {
        new_collection.push(collection_1[i]);
        i++;
    }
    while (j < collection_2.length) {
        new_collection.push(collection_2[j]);
        j++;
    }
    return new_collection;
};
module.exports = merge;
