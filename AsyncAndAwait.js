async function fetchUserData() {
    try{
        
        let response=await fetch('https://jsonplaceholder.typicode.com/users/1');
        let data=await response.json();
        console.log(data);

    } catch(err){
        console.log("Error in Tetching Data: ",err);
    }
}

fetchUserData();
