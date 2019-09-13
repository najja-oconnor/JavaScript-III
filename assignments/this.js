/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding : Whenever this is called in the Global Scope 
* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
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

function Cook (person) {
    this.nationality = "Dominican"
    this.dish = "Mofongo"
    this.cooking = function () {
        return console.log(`${this.dish}` + " " + "is a" + " " + `${this.nationality}`
        
)}
}

const Chad = new Cook({nationality: "Jamaican", dish: "Stew Chicken"})
console.log(Chad)

// Principle 4

// code example for Explicit Binding