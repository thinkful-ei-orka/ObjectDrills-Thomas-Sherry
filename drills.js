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