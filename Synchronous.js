/* Synchronous - tasks are executed one after another */

setTimeout(()=>{
    console.log('Executing after 5 seconds...');
},10000)


console.log("First Line / Start point");

async function Synchronous(){
   
    
    console.log('Executing Sychronous Task...');

    let data=await fetchData('api')
    console.log(data);

}



Synchronous();

console.log('Last line  / end Point');