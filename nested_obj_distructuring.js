/* Destructuring Nested Objects */
const Person = {
    name: "Harry Potter",
    age: 29,
    sex: "male",
    materialStatus: "single",
    address: {
        country: "USA",
        state: "Nevada",
        city: "Carson City",
        pinCode: "500014",
    },
};
const { address: { state, pinCode }, name } = Person;
console.log(name, state, pinCode)
// Harry Potter Nevada 500014
console.log(city) // ReferenceError