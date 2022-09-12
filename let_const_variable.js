/* var, let, const */
// Create Global property:  var
// Redeclare:  var
// Hosisting:  var
// Reassign: var, let
// Block Scope:  let, const

/* let */
let num1 = 3
if (true) {
    let num1 = 5
    console.log(num1) // prints 5
}
console.log(num1) // prints 3

/* const */
const a = 55
a = 44 // throws an error