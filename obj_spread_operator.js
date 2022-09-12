/* Spread operator */
const a = {
    firstName: "FirstName",
    lastName: "LastName1",
}
const b = {
    ...a,
    lastName: "LastName2",
    canSing: true,
}
console.log(a)
//{firstName: "FirstName", lastName: "LastName1"}
console.log(b)
/* {firstName: "FirstName", lastName: "LastName2",
canSing: true} */
/* great for modifying objects without side
effects/affecting the original */
