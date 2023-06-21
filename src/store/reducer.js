import filterReducer from "../components/Filters/filterSlice";
import todolistReducer from "../components/TodoList/todolistSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers ( {    

       filters: filterReducer,
       todoList: todolistReducer
});
export default rootReducer;
