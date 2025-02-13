/* 

types of Variable Declarations

to create variable with help of three keywords

    1. Var - Reassign variable name and Possible to update Variable values
    2. Let - the variable name not possible to redeclare, but its possible to update variable values
    3. Const - the variable name not possible to redeclare and not possible to update variable values

*/

//variable Declaration
var institute='Narayana Technologies';

//Recreate variable name
var institute='Global TieUp';

    //update Variable Values
    institute='Global TieUp Brand and Technologies';


let course='React';
/* 

the variable not possible to redeclare, but its possible to update variable values

let course='JavaScript and React'; XXXXX

*/
//update variable values
course='JavaScript and React';


const coursefee=20000;

//not possible to redeclare
//const coursefee=15000;

//not possible to update variable values
     //coursefee=10000;

/* 

*/


/* 
JavaScript Variable Scope

    1. Global Scope - variable can declare outside of the function and outside of the block, to access anywhere in the script.

    //variable 

    2. Function Scope -to Declare variable insid of the function, to access within that function. 
    
    'function(){
    //variable
    }'

    3. Block Scope - to Declare variable insid of the Block 
    
    '{
    //variable
    }'

    4. Lexical Scope - inner functions can access variables from their outer functions
    
    '
    outer(){
    //variable
        inner(){
        //access variable from outer function
        }
    
    }
    '

*/
