import { myname, mylocation, myfun, myclass } from "./myoutputs.js";
import { myobject, cdetails } from "./productdetails.js";

console.log(myname);
console.log(mylocation);
console.log(myfun());
console.log(myobject.productname);
console.log(cdetails.course);
const coursedetails = new myclass();
coursedetails.printcourse();