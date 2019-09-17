/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding : Whenever this is called in the Global Scope the "window"
* 2. Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. New binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit binding : Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function thisExample (param) {
    console.log(this)
    return param;
}
// code example for Window Binding

// Principle 2

const guy = {
    name: 'Rudy',
    speaking: function () {
        console.log(`${this.name}` + " " + 'is the man !')
    }
}
guy.speaking('Rudy');
// code example for Implicit Binding

// Principle 3

function Human(attributes) {
    this.name = attributes.name;
    this.favoriteFood = attributes.favoriteFood;
    speak = function () {
        console.log( `${this.name} is my name and I love ${this.favoriteFood}`
        )}
  }

  let Najja = new Human({
      name: "Najja",
      favoriteFood: "Shrimps"
  })

  console.log(Najja)
// Principle 4

// code example for Explicit Binding
let cooks = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

let cook1 = {
    firstName: "Peter",
    lastName: "Monserrat"
}

cooks.fullName.call(cook1);

//Call allows me to substitute the object cook1 with cooks

