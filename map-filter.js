const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// Function for squar
// const squar = function(x){
//     return x * x;
// }

// Arrow function of Squar() function
// const squar = (x) => x * x;

//////////////////// Map /////////////////////////

// Squar using Map
// const squar_result = numbers.map(function(x){
//     return x * x;
// })
// console.log(squar_result);

// Squar Map using Arrow function to make it more clean (less code)
// const squar_result = numbers.map(x => x * x);
// console.log(squar_result);








//////////////////// Filter /////////////////////////
// Filter - Do filter depends on given condition

// // Example 01: I want to see numbers that are bigger than 5 in the numbers array
// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);

// // if i want to filter and see numbers that are lower than 5 then it goes like this
// const lesser = numbers.filter(x => x < 5);
// console.log(lesser)


// // Find - same like filter but it return the only one value (first) that matches the condition
// const isThere = numbers.find(x => x > 5); // here we are finding that is there any value greater than 5 in the numbers array
// console.log(isThere);