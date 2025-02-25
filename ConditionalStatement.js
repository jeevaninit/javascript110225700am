/* 
Condition Statements: 

-if - executes code if the condtion is ture 
-else - executes code if the IF condtion is false
-else if - to write more then one condition / multi conditions 
-switch - executes code based on different cases
-ternary Operator - shorthand for if-else
*/


/* let age=16;

//if statement
if(age>18){
    console.log("You are eligible for Vote..");
}
//else statement
else {
    console.log("You are not eligible to Vote..")
} */


/* 

// if - else if and else Statement
let score=95;

if(score>=90){
    console.log("Grade: A");
}else if (score>=80){
    console.log("Grade: B");
}else if(score>=70){
    console.log("Grade: C");
} else {
    console.log("Grade: D");
} */


/* 
    //switch statement
    
    //switch
    //case
    //break
    //default



    let day=4;
    let dayName;

    switch(day){
        case 1:
            dayName="Monday";
            break;
        case 2:
            dayName="Tuesday";
            break;
        case 3:
            dayName="Wednesday";
            break;
        case 4:
            dayName="Thursday";
            break;
        case 5:
            dayName="Friday";
            break;
        case 6:
            dayName="Saturday";
            break;
        case 7:
            dayName="Sunday";
            break;
        default:
            dayName="Invalid Day";
    }

    console.log(dayName);
 */


    //Ternary Operator
    let age=12;
    let mystatus=(age>=18) ? "Adult":"Minor";
    console.log(mystatus);