/* 
Destructuring


*/

const numbers=[10,20,30];
const studentnames=['sai','Bhanu','deepak'];

const [first,second,third]=studentnames;

console.log(second);

const person={
    name:'Chandra',
    age:30,
    mylocation:'Uppal'
}

const {name,age,mylocation}=person;

console.log(name);
console.log(age);
console.log(mylocation);