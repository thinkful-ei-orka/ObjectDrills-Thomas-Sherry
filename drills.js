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

for (const key in objects) {
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
    { name: 'dude', jobTitle: 'awesome' },
    { name: 'dudette', jobTitle: 'awesomer' },
    { name: 'Thomas', jobTitle: 'none' },
    { name: 'Sherry', jobTitle: 'none' },
    { name: 'Smaug', jobTitle: 'dragon' }
];

peopleObjects.forEach((person) => console.log(`${person.name}: ${person.jobTitle}`));

//add boss to everyone except the actual owner
//change interation to print: "${title} ${name} reports to ${boss}."
// if no boss, "${title} ${name} doesn't report to anybody."

let peopleObjects2 = [
    { name: 'dude', jobTitle: 'awesome', boss: 'Smaug' },
    { name: 'dudette', jobTitle: 'awesomer', boss: 'Smaug' },
    { name: 'Thomas', jobTitle: 'none', boss: 'Smaug' },
    { name: 'Sherry', jobTitle: 'none', boss: 'Smaug' },
    { name: 'Smaug', jobTitle: 'dragon' }
];

peopleObjects2.forEach((person) => {
    if (person.hasOwnProperty('boss')) {
        console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
    } else {
        console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
    }
});

//redo crack code
//use object as cipher
//use key-value as code translator
//use decodeword fucntion to return a full string out of a bunch of words
//a: 1
//b: 2
//c: 3
//d: 4

//take word, check the first character '[0]'
//see if that fits in our object
//if it does, return index of cipher
//if not, return a space

let cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

function decode(word) {
    let index = word[0];
    if (cipher.hasOwnProperty(index)) {
        return word[cipher[index]];
    } else {
        return ' ';
    }
    
    /*
    for(const key in cipher) {
        if(word[0] === key) {
            return word[cipher[key]];
        } else {
            return ' ';
        }
    }*/
}

function decodeWords(strWords) {
    let decodedMessage = '';
    let strArray = strWords.split(' ');
    strArray.forEach(word => decodedMessage += decode(word));
    console.log(decodedMessage);
    //split the string into individual words
    //decode words in the array
    //return value
}

let decodethis = 'craft block argon meter bells brown croon droop';
decodeWords(decodethis);