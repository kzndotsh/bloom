// Introduction to Hash Tables
// 
//     Hash Tables are data structures for storing key-value pairs.
//     They use a hash function to transform keys into indices for efficient storage and retrieval.
//     Hash Tables provide fast search, insertion, and deletion operations.
// 
// Using Object and Map in JavaScript
// 
//     JavaScript's Object is a common example of a Hash Table implementation.
//     Object's properties can conflict with inherited properties and don't track the size of the table.
//     Map, another Hash Table implementation, addresses these limitations by providing better key-value storage.
// 
// Implementing a Hash Table in JavaScript
// 
//     Create the HashTable Class:
//         Initialize properties for the table and size.
// 
//     Implement the _hash() Method:
//         Use a hash function to transform keys into indices.
//         Ensure that the hash value stays within the bounds of the table.
// 
//     Write the set(key, value) Method:
//         Calculate the index using the _hash() method.
//         Store the key-value pair at the specified index.
//         Increment the size property.
// 
//     Write the get(key) Method:
//         Calculate the index using the _hash() method.
//         Retrieve the value stored at the index.
// 
//     Write the remove(key) Method:
//         Calculate the index using the _hash() method.
//         Check if a key exists at that index and remove it.
//         Decrement the size property.
// 
//     Handle Index Collision:
//         In case of index collisions, store key-value pairs in an array at the same index to avoid overwriting.
// 
//     Add a display() Method:
//         Display all key-value pairs stored in the Hash Table, including chained entries.
// 
// Conclusion
// 
//     Hash Tables are powerful data structures for fast search, insertion, and deletion operations.
//     JavaScript's Object and Map classes provide built-in Hash Table implementations.
//     You can create your own HashTable class to implement key-value storage with handling of index collisions.
// 
// By using Hash Tables, you can efficiently manage and retrieve data, making them an essential concept in computer science and software development.


class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]
