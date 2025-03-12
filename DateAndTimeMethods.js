/* 
Date and Time Methods in JavaScript

-new Date() - create a new Date Object
-getfullYear() -get Year
-getMonth() - Get Month
-getDate() - get day of the Month
-getDay() - get day of the week 
-getHourse() - get 24 Hourse format
-getMinutes() - get Minutes
-getSeconds() - get Seconds
-getMilliseconds - Get Milliseconds

*/

let now=new Date();
console.log(now);

console.log('Date Components: ')
//get FullYear
console.log(now.getFullYear());

//get Month
console.log(now.getMonth());


//get Day of the Month
console.log(now.getDate());

//get Day of the week (0=sunday)
console.log(now.getDay());

console.log('Time Components: ');

//get Hours
console.log(now.getHours());

//get Minutes
console.log(now.getMinutes());

//get seconds
console.log(now.getSeconds());

//get Milliseconds
console.log(now.getMilliseconds());