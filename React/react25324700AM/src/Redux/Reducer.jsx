const count=0
const course="React"
const details={
    institute:'Narayana Technologes',
    city:'Hyderabad'
}

const Reducer=(state={count,course,details},action)=>{

    const {type}=action || {}

    switch(type){
        case "ADD":
            return{...state,count:state.count+1}
        case "DELETE":
            return{...state,count:state.count-1}
        default:
            return state;
    }

    
}
export default Reducer;