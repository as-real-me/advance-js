// Argument methode helps to find out all the perameters that passes through the function.
function add(num1, num2){
    const arg = [...arguments]; // Using argument to see how many perameter values are passes.
    let temp = 0;
    const result = arg.map((value) => temp += value);
    return result[result.length - 1];
}

// Passing 4 parameters values insted of 2 (num1, num2), still getting the right outcome bcz we used argument in the function.
const result = add(2, 3, 7, 3);
console.log(result);