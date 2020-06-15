// Different ways to get undefined.

// Way 1: When not defined variable value;
// let pakhi;

// Way 2: When not defining return value in a function
// example 01:
// function printSomething(){
//     console.log("Print something!");
// }
// const result = printSomething();

// example 02:
// function add(num1, num2){
//     console.log(num1 + num2);
//     return //didn't assigne any value here
// }
// const result = add(1, 2);

// Way 3: If don't pass expected parameter then by default it will be undefined
// function add(num1, num2){
//     console.log(num1, num2);
// }
// const result = add(1); // here i didn't pass the value of num2 so it will be undefined

// Way 4: If call a property that isn't in the object then it will be undefined
// const poruaPola = {
//     name: "first boy",
//     id: "007"
// }
// console.log(poruaPola.gf); // gf is not a defined property in poruaPola object

// // Way 5: if call an index in array which is not in that array
// const ages = [10, 14, 18, 21, 35, 17];
// console.log(ages[20]); // there is no index 20 in ages array

// Way 6: If you set value intentionally undefined ;)
// const justKidding = undefined;
// console.log(justKidding);

//Null - Null means there is nothing! Developers usually set in intentionally.
const score = null;
console.log(score);