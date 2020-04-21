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
  hydration: function() {
    return this.water / this.flour * 100;
  }
};

console.log(loaf.water);
console.log(loaf.flour);
console.log(loaf.hydration());