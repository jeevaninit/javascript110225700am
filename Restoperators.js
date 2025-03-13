const numbers=[10,20,30,40,50,60,70];

const[value1,value2,...restvalue]=numbers;

console.log(restvalue);


function myfunction(arg1,arg2,...args){
    console.log(arg1);
    console.log(arg2);
    console.log(args);
}

myfunction(1,2,3,4,5,6,7);