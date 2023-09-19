/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  let newObj = {};
  for (let prop in obj) {
    newObj[prop] = obj[prop].trim();
  }
  return newObj;
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  for (let prop in obj) {
    obj[prop] = obj[prop].trim();
  }
  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  let largest = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i].integer > largest) {
      largest = integers[i].integer;
    }
  }
  return largest;
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    this.count = initialNumber;
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */

  countDown() {
    if (this.count > 0) {
      return this.count--;
    }
    return this.count;
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed

    this.seasons = ['summer', 'fall', 'winter', 'spring'];
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    let currentSeason = this.seasons.shift();
    this.seasons.push(currentSeason);
    return currentSeason;
  }
}

class Car {
  constructor(name, tankSize, mpg) {
    this.odometer = 0;
    this.tank = tankSize;
    this.tankSize = tankSize;
    this.name = name;
    this.mpg = mpg;
  }

  drive(distance) {
    const milesCanDrive = this.tank * this.mpg;
    if (distance <= milesCanDrive) {
      this.odometer = this.odometer + distance;
      this.tank = this.tank - distance / this.mpg;
      console.log(this.tank);
    } else {
      this.tank = 0;
      this.odometer = this.odometer + milesCanDrive;
    }
    return this.odometer;
  }

  refuel(gallons) {
    if (gallons <= this.tankSize - this.tank) {
      this.tank = this.tank + gallons;
    } else {
      this.tank = this.tankSize;
    }
    return this.tank * this.mpg;
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync(number) {
  const promise = new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(true);
    } else {
      resolve(false);
    }
  });

  return promise;
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
