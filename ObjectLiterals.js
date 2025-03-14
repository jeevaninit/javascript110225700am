/* 
Object Literals - simplecity to make the Object

*/

var myname='Jeevan';
var mylocation='Hyderabad';


const myobject={
    nm:myname,
    ml:mylocation
}

console.log(`My Name is: Mr. ${myobject.nm} and my Location: ${myobject.ml}`);


let weekdays=['mon','tue','wen','thu','fri'];

let shifts={
    a:'Morning',
    b:'Afternoon',
    c:'Night'
}

let employee={
    id:1,
    ename:'Bhanu',
    area:'Hyderabad',
    weekdays,
    shift:shifts.c,
    myfun:()=>{
        let contact=8747843876576;
        console.log(contact);

    },
    salary:{
        basic:10000,
        ta:2000,
        hra:3000
    }
}

console.log(`${employee.id} ${employee.ename} ${employee.shift}`);
console.log(employee.salary.hra);
console.log(employee.myfun());
