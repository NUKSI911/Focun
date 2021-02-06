export const weatherReducer=(state=[],action)=>{

    switch(action.type){

        case "weather":
            return [...state,action.payload]

        default:
            return state

    }
}