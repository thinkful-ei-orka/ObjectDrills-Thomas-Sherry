'use strict';

// creat object loaf - obj initializer
// 2 props - flour = 300, water = 210
//console.log(flour & water props)
//add empty method called hydration
//return water / flour * 100
//call hydration and console.log result

let loaf = {
    flour: 300,
    water: 210,
    hydration: function () {
        return this.water / this.flour * 100;
    }
};

console.log(loaf.water);
console.log(loaf.flour);
console.log(loaf.hydration());

//obj = five props - foo, bar, fum, quux, spam
//loop using for in
//console log each name and value

let objects = {
    foo: 'fam',
    bar: 'bim',
    fum: 42,
    quux: 'jack',
    spam: 'eggs'
};

for(const key in objects) {
    console.log(`${key} ${objects[key]}`);
}

//object(meals) w/ array of strings
//'breakfast' 'second breakfast' 'elevenses' 'lunch' 'afternoon tea' 'dinner' 'supper'
//console.log(4th meal)

let hobbitMeals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbitMeals.meals[3]);

//create 3-5 objs, with name and jobtitle
//use whatev
//store in array
//iterate over arry to show job title and name

// [a, b, c]
// [a{}, b{}, c{}]
let peopleObjects = [
    {name: 'dude', jobTitle: 'awesome'},
    {name: 'dudette', jobTitle: 'awesomer'},
    {name: 'Thomas', jobTitle: 'none'},
    {name: 'Sherry', jobTitle: 'none'},
    {name: 'Smaug', jobTitle: 'dragon'}
];

peopleObjects.forEach((person) => console.log(`${person.name}: ${person.jobTitle}`));