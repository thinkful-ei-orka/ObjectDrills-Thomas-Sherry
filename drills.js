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

//factory function createCharacter() to build LOTR characters
//6 properties: Name, Nickname, Race, Origin, Attack, Defense
//method desctibe() "{name} is a {race} from {origin}."
//method evaluateFight(character)
//damageDealt = this.attack - character.defense
//damageTaken = character.attack - this.defense
//if damageTaken < 0 then damageTaken = 0
//if damageDealt < 0 then damageDealth = 0
//"Your opponent takes {x} damage and you receive {y} damage"

function createCharacter(name, nickname, race, origin, attack, defense, weapon = null) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe: function() {
      if(weapon) {
        return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`;
      }
      return `${this.name} is a ${this.race} from ${this.origin}.`;
    },
    evaluateFight: function(character) {
      let damageDealt = this.attack - character.defense;
      let damageTaken = character.attack - this.defense;
      if(damageTaken < 0) {
        damageTaken = 0;
      }
      if(damageDealt < 0) {
        damageDealt = 0;
      }
      return `Your opponent takes ${damageDealt} damage and you receive ${damageTaken} damage`;
    }
  };
}

//create array
let charactersArray = [
  ['Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'a wizard staff'],
  ['Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'],
  ['Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'],
  ['Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'],
  ['Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5]
];

let characters = [];
charactersArray.forEach(element => characters.push(createCharacter(...element)));

for(const character of characters) {
  console.log(character.describe());
}

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 16, 80000));

let strider = characters.find(character => character.nickname === 'aragorn');
console.log(strider.describe());

let hobbitFolk = characters.filter(character => character.race === 'Hobbit');

let strongPeople = characters.filter(character => character.attack > 5);

for(const hobbit of hobbitFolk) {
  console.log(hobbit.name);
}

for(const people of strongPeople) {
  console.log(people.name);
}
