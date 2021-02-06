export const newsReducer=(state=[],action)=>{

    switch(action.type){

        case "news":
            console.log(action.payload)
            return action.payload

        default:
            return state

    }
}