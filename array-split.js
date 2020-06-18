const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const midPart = nums.slice(2, 6); // slice - copy a certain part using index but don't remove from the main aeeay
// console.log(midPart);

// const removeMid = nums.splice(2, 4); // Splice - Cut the certain part and remove it from the main array
// console.log(removeMid);
// console.log(nums);

// const nums2 = [1, 2, 3, 4, 5, 6];
// const replaceMid = nums2.splice(2, 3, 9, 10, 11); // splice also can replace where it romoves from 
// console.log(replaceMid);
// console.log(nums2)


//Join - joint array elemet using anything you gave
const joinAll = nums.join("");
console.log(joinAll);
const joinByClone = nums.join(":");
console.log(joinByClone);
const joinByDash = nums.join("-");
console.log(joinByDash);
const joinBySpace = nums.join(" ");
console.log(joinBySpace);
const joinLastName = nums.join("-lastname ");
console.log(joinLastName);
