const merge = (collection_1: number[], collection_2: number[]): number[] => {
  let new_collection = [];
  let i = 0;
  let j = 0;
  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      new_collection.push(collection_1[i]);
      i++;
    } else {
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
export {}

/* 

const merge = (collection_1: number[],collection_2: number[] ):(number | undefined)[]=>{
  let new_collection = [];
  while (collection_1.length && collection_2.length) {
    let next = collection_1[0] <= collection_2[0] ? collection_1.shift():collection_2.shift()
    new_collection.push(next)
  }

  return [...new_collection,...collection_1,...collection_2]
}

*/
