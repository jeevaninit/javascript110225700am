/* 
function:(specific task) reusable block of code, to maintain code in the organization format.
1. Traditional function
2. Arrow function

*/

//Traditional Function

function myfun(){
    console.log('Hello am from Named function / Regular Function');
}

myfun();

function persondetails(name){
    return "Hello "+name+"!...";
}

console.log(persondetails("Jeevan"));


function sumvalue(sub1,sub2,sub3){
    return sub1+sub2+sub3;
}

console.log("Total Marks: "+sumvalue(50,40,10));

//Anonymous function / function expression

const addvalue=function (a,b){
    return a*b;
}

console.log(addvalue(10,5));

//Arrow function (ES6);
//A shorter syntax using =>

    const multiply=(a,b)=>a*b;
    console.log(multiply(20,20));

    //arrow function with multilines 
    const myarrow=()=>{
        let myname='Jeevan Konduru';
        console.log('Am from Multi line Arrow Functions '+myname);
        console.log('Line two here...')
    }
    console.log(myarrow());

    //function with default Parameters /  values

    function mylocation(name='Hyderabad'){
        return "Hello my Place is : "+name+"!...";

    }
    console.log(mylocation());


    //callback functions
    //A function passed as an argument to another function

    function welcomegreet(name,callback){
        console.log("Hello Mr."+name);
        callback();
    }

    function wish(){
        console.log("Hello am from Callback function info...")
    }

    welcomegreet('Jeevan',wish);