let myname = 'Jeevan';
let mylocation = 'Dilsukhnagar';

function myfun() {
    console.log('Hi am from function...');
}




class myclass {
    constructor() {
        this.course = "React JS";
    }
    printcourse() {
        console.log(this.course);
    }
}

export { myname, mylocation, myfun, myclass };