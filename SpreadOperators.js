/* 
Spread Operators

(...) three dots
*/

const array1=[1,2,3];
const array2=[4,5,6];

const mergeArray=[...array1, ...array2];

console.log(mergeArray);

function sum(a,b,c,d,e,f){
    return a+b+c+d+e+f;
}

const numbers=[2,4,6];

console.log(sum(...mergeArray));