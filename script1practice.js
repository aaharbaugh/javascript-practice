
const data = [
  { "city": "seattle", "state": "WA", "population": 652405, "land_area": 83.9 },
  { "city": "new york", "state": "NY", "population": 8405837, "land_area": 302.6 },
  { "city": "boston", "state": "MA", "population": 645966, "land_area": 48.3 },
  { "city": "kansas city", "state": "MO", "population": 467007, "land_area": 315 }
];

// const cityState = data.map((location) => {
//   return { 'live': location.city, 'in': location.state }
// });
// console.log((cityState)
//   .map(location => location.live)
//   .filter(city => city.length >= 7)
//   .map(city => city[0] + " is for " + city)
//   .sort()
// );

// const cityPopulation = data.map(function(area, function2){
//   return function2(area.population);
// });
// console.log(cityPopulation);

// console.log(data.map(location => location.city + " " + location.state).push("Jackson "));

// const cityState2 = data.map(function(location) {
//   return "You are the city of " + location.city + " in " + location.state;
// });
// console.log(cityState2);

  // function sayHello(name) {
  //   console.log(`Hello, ${name}`);
  // }

  //  function callSayHelloWithLars(callback, innerName) {
  //   callback(innerName);
  // }
  
  // callSayHelloWithLars(sayHello, "Jacob");


// const myObj = {
//   greeting: 'Hello',
//   sayHello: function(name) {
//     console.log(`${myObj.greeting} my name is ${name}`);
//     console.log(myObj);
//   }
// };
// myObj.sayHello('Ryan');


var id = 0;

// Person object template with basic attributes
function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
  this.parent = parent;
  this.userId = incrementId(id);
};

//auto incrementing id attribute for each new person object
function incrementId(currentId){
  id += 1;
  return currentId;
};

//speak is a object function that gives basic details about user.
Person.prototype.speak = function () {
  //base speak phrase
  var speakString = `${this.userId} Hello, my name is ${this.name} and my age is ${this.age}. I am from ${this.homeTown}.`
  //if parent exists, additional parental phrase
    if(this.parent.name != ''){ //we have to reference 
      if (this.age >= 13) {
        speakString += ` I'm now the teenager of ${this.parent.name}`;
      } else {
        speakString += ` I'm the child of ${this.parent.name}`;
      }
    }
  return speakString;
};

//age change adds x years to person objects age attribute
Person.prototype.ageChange = function(years){
  console.log(`${this.name} has grown by ${years} years.`);
  if (this.parent != '') {
    // We should filter out each Person after they become 70 or greater age (Can) lets use chat. 
    // It would be like adding death
    this.age += years;
    this.parent.age += years;
  }
  else {
    return this.age += years;
  }
};

function Child(childAttributes) {
  Person.call(this, childAttributes);
  this.age = 0;
  this.homeTown = childAttributes.parent.homeTown;
  this.parent = childAttributes.parent;
};

Child.prototype = Object.create(Person.prototype);

// persons being created
const pebbles = new Person({
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock',
});

const joey = new Person({
  age: 22,
  name: 'Joey',
  homeTown: 'Laurel',
  rank: 'top',
  lastSignIn: 'yesterday',
});

const sam = new Child ({
  name: 'Sam',
  parent: joey,
});

const jeff = new Child ({
  name: 'Jeff',
  parent: pebbles,
});

console.log(sam.speak());
sam.ageChange(15);
console.log(joey.speak())

// console.log(pebbles.speak());
// console.log(joey.speak());
// joey.ageChange(25);
// console.log(joey.speak());
// console.log(sam.speak());
// console.log(jeff.speak());
// console.log(sam.listParent());
// console.log(jeff.listParent());
// sam.ageChange(15);
// console.log(sam.speak());
// //console.log(sam.listParent());
// console.log(joey.speak());
// jeff.ageChange(10);
// joey.ageChange(15);
// console.log(jeff.speak());
// console.log(jeff.listParent());
// console.log(pebbles.speak());
// console.log(joey.speak());