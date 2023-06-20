import filterReducer from "../components/Filters/FilterSlice";
import todolistReducer from "../components/TodoList/TodolistSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers ( {    

       filters: filterReducer,
       todoList: todolistReducer
});
export default rootReducer;
