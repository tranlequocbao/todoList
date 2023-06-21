// const initState = {
//     search: "",
//     status: "All",
//     prioritiese: [],
// };
// const filterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "searchText":
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case "searchStatus":
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case "prorityChange":
//             return {
//                 ...state,
//                 prioritiese: action.payload
//             }
//         default:
//             return state;
//     }
// };
// export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState: {
        search: "",
        status: "All",
        prioritiese: [],
    },
    reducers:{
        searchText:(state, action)=>{
            state.search = action.payload
        },
        searchStatus:(state, action)=>{
            state.status=action.payload
        },
        prorityChange:(state,action)=>{
            state.prioritiese=action.payload
        }
    }
})
