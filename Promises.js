/* 
promises: - useful for handlling asynchronous operations

a promises has three states
    -pending 
    -fulfilled
    -rejected 

*/

let mypromise=new Promise((resolve,reject)=>{

    let success=true;

    setTimeout(()=>{
        if(success){
            resolve("Hello Task is Completed...");
        }else {
            reject("hi Task Failed..");
        }
    },2000)

});

//consuming promises


mypromise
.then((message)=>console.log(message))
.catch((err)=>console.log(err))
.finally(()=>console.log('Task Finished...'));