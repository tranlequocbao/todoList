

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
        priorityChange:(state,action)=>{
            state.prioritiese=action.payload
        }
    }
})
