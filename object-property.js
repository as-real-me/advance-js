const students = [
    {id: 23, name: 'Imran Hasmi'},
    {id: 34, name: 'Sunny Leone'},
    {id: 61, name: 'Elena De Cruz'},
    {id: 71, name: 'Amir Khan'}
];

// const names = [];

// for(let i = 0; i < students.length; i++){
//     const name = students[i].name;
//     names.push(name);
// }

// console.log(names);
const names = students.map(obj => obj.name);
const ids = students.map(obj => obj.id);

const bigger = students.filter(obj => obj.id > 40);
const biggerOne = students.find(obj => obj.id > 40);



console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);

