// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancers);

// export default store;

import {configureStore} from '@reduxjs/toolkit'
import filtersSlice from '../components/Filters/filterSlice'
import todoListSlice from '../components/TodoList/todolistSlice'

const store = configureStore({
    reducer:{
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer
    }
})
export default store