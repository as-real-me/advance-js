function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1()); // Clock1 - 1
console.log(clock1()); // Clock1 - 2
console.log(clock1()); // Clock1 - 3
console.log(clock1()); // Clock1 - 4

const clock2 = stopWatch();
console.log(clock2()); // Clock2 - 1
console.log(clock2()); // Clock2 - 2

console.log(clock1()); // Clock1 - 5

console.log(clock2()); // Clock2 - 3
console.log(clock2()); // Clock2 - 4

console.log(clock1()); // Clock1 - 6



