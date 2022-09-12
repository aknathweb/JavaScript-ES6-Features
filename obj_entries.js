/* Object.entries() */
const obj = {
    firstName: 'FirstName',
    lastName: 'LastName',
    age: 24,
    country: 'India',
};
const entries = Object.entries(obj);
/* returns an array of [key, value]
pairs of the object passed */
console.log(entries);
/* prints
[
['firstName', 'FirstName'],
['lastName', 'LastName'],
['age', 24],
['country', 'India']
]; */
