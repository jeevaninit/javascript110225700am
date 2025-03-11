/* 
String Methods:

-length -> to get length of the String
-indexOf() -> find index of Substring
-lastIndexOf() -> find last index of substring
-includes() -> check if string contains a substring
-slice() -> extract part of a string
-substring() -> extract part of a string (no nagative index)
-lowerCase() -> convert to lowercase
-upperCase() -> convert to uppercase
-replace() -> replace string content
-trim() -> remove whitespace from both side
-split() -> convert string to array
-join() -> convert array to string
-repeat() -> repeat string
-startsWith() -> check if string starts with substring
-endsWith() -> check if string ends with substring

*/
let text="Hello am from StringMethods";
console.log(text.length);

let str="Hello StringMethods in JS";
console.log(str.indexOf('StringMethods'));
console.log(str.indexOf("Hello"));

//lastIndexof
console.log(str.lastIndexOf('JS'));

//includes()
console.log(str.includes('JS'));
console.log(str.includes('python'));

//slice(start, end)
console.log(str.slice(6,20));

//substring(start, end)
console.log(str.substring(0,6));

//lowercase and uppercase
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//replace and replaceAll
console.log(str.replaceAll('JS','JavaScript'));

//trim() /trimStart / trimEnd
let tri=" Hell Trim ";
console.log(tri.trim());
console.log(tri);

//split()
let spl='apple, banana, cherry';
let fruits=spl.split(",");
console.log(fruits);

//join()
let fru=['Apple','Banana','Cherry'];
let convertstring=fru.join(',');
console.log(convertstring);


//repeat
let rep="Hello ";
console.log(rep.repeat(5));

//startsWith
console.log(str.startsWith("Hello"));


//endswith
console.log(str.endsWith('JavaScript'));
