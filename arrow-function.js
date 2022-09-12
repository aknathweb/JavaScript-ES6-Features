//Normal function
function normal_function_avg(a, b, c) {
    const sum = a + b + c;
    return sum / 3;
}
console.log(normal_function_avg(2, 6, 3)) // prints 3.6666666666666665

// Arrow function
// 1. 
const add = (a, b) => a + b
console.log(add(2, 6)) // prints 8

// 2.
const avg = (a, b, c) => {
    const sum = a + b + c;
    return sum / 3;
}
console.log(avg(2, 6, 3)) // prints 3.6666666666666665

