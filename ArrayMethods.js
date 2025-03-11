/* Array Methods

array=[1,2,3,4]

array.push() -- to add a value to existing array
array.pop() -- to remove last element in the array
array.shift() -- to remove first element in the array
array.splice() -- to remove particular element in the existing array
array.indexof() -- find index of element
array.includes() -- check if element exits
array.sort() -- sort array
array.reverse() -- reverse array


*/

let arr=[10,20,30,40,50,60,70];
let colors=['red','blue','yellow','orange'];

//array.push()
// arr.push(100);

//array.pop()
// arr.pop();

//array.shift();
// arr.shift();

let index=2;
arr.splice(index,2);


//colors.sort();
colors.reverse();

console.log(arr);
console.log(colors);
//console.log(colors.indexOf('blue'));
console.log(colors.includes('limegreen'));