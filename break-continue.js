const nums = [1, -2, 3, 4, -5, 6, 7, 8, 9];

for(let i = 0; i < nums.length; i++){
    if(nums[i] > 7){
        break; // break the loop
    }
    else if(nums[i] < 0){
        continue; // Skip that oart of the loop and continue to next command
    }
    console.log(nums[i]);
}