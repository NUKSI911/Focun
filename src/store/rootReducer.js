import { newsReducer } from "./newsReducer";
// import { weatherReducer } from "./weatherReducer";
// import { fourSquareReducer } from "./fourSquareReducer";
import { combineReducers } from "redux";



export  const rootReducer =combineReducers({news:newsReducer})

// weather:weatherReducer,
// four:fourSquareReducer