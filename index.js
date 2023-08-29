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
  for (let key in obj) {
    newObj[key] = obj[key].trim();
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
  for (let key in obj) {
    obj[key] = obj[key].trim();
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
      this.count--;
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

// class Car {
//   /**
//    * [Exercise 6A] Car creates a car object
//    * @param {string} name - the name of the car
//    * @param {number} tankSize - capacity of the gas tank in gallons
//    * @param {number} mpg - miles the car can drive per gallon of gas
//    */
//   constructor(name, tankSize, mpg) {
//     this.odometer = 0; // car initializes with zero miles
//     this.tank = tankSize; // car initializes full of gas
//     this.mpg = mpg; // miles per gallon
//   }

//   /**
//    * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
//    * @param {number} distance - the distance we want the car to drive
//    * @returns {number} - the updated odometer value
//    */
//   drive(distance) {
//     const maxDistance = this.tank * this.mpg; // Maximum distance car can drive with current gas
//     const actualDistance = Math.min(maxDistance, distance); // The actual distance car will drive
//     this.odometer += actualDistance; // Add distance to odometer
//     this.tank -= actualDistance / this.mpg; // Consume gas based on distance
//     return this.odometer;
//   }

//   /**
//    * [Exercise 6C] Adds gallons to the tank
//    * @param {number} gallons - the gallons of fuel we want to put in the tank
//    * @returns {number} - the miles that can be driven after refueling
//    */
//   refuel(gallons) {
//     const spaceInTank = this.tank - this.tank; // Corrected this line
//     const actualGallons = Math.min(gallons, spaceInTank); // Actual gallons added to the tank
//     this.tank += actualGallons; // Add fuel to the tank
//     return this.tank * this.mpg; // Return miles that can be driven with the refueled tank
//   }
// }

class Car {
  constructor(name, tankSize, mpg) {
    this.odometer = 0;
    this.tank = tankSize;
  }

  drive(distance) {
    this.odometer += distance;
    this.tank -= distance / this.mpg;
    if (this.tank <= 0) {
      this.tank = 0;
    }
    return this.odometer;
  }

  refuel(gallons) {
    this.tank += gallons;
    return this.odometer;
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
