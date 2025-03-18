/* classes : - template for javaScript Object
a class is a Blue print for creating Object with similer Properties and Methods 
to provide a more structured and Object Oriented way to write JavaScript Code 

to create class with help of Class keyword

class myclass{}

inside of the class there is two methods
-constructor
-behavior

    */

class persondetails{

    constructor(name,place,m1,m2){
        this.name=name;
        this.place=place;
        this.m1=m1;
        this.m2=m2;
        
    }


    wish(){
        console.log(`Hello My Name is ${this.name} amd my Location ${this.place}.`);
    }

    add(){
        console.log(`Total Marks ${this.m1+this.m2}`);
    }

    mycondition(){
        if(this.m1>=35 && this.m2>=35){
            console.log("Pass")
        }
        else {
            console.log("Fail");
        }
    }

}

let pdata=new persondetails("Jeevan","Hyderabad",70,50);

pdata.wish();
pdata.add();
pdata.mycondition();