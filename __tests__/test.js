const merge = require('../dist/merge')
const {describe, expect, test} = require('@jest/globals');

describe('merge', () => {
  test('merges two sorted arrays', () => {
    const collection_1 = [1, 2, 3, 4, 5];
    const collection_2 = [6, 7, 8, 9, 10];
    expect(merge(collection_1, collection_2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('merges two arrays with duplicates', () => {
    const collection_1 = [1, 2, 2, 3];
    const collection_2 = [2, 3, 4, 5];
    expect(merge(collection_1, collection_2)).toEqual([1, 2, 2, 2, 3, 3, 4, 5]);
  });
  test('merges two empty arrays', () => {
    const collection_1 = []
    const collection_2 = []
    expect(merge(collection_1, collection_2)).toEqual([]);
  });
  test('merges two arrays with one empty array', () => {
    const collection_1 = [1, 2, 3]
    const collection_2 = []
    expect(merge(collection_1, collection_2)).toEqual([1, 2, 3]);
  });
});