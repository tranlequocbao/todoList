const initState = {
    search: "",
    status: "All",
    prioritiese: [],
};
const filterReducer = (state = initState, action) => {
    console.log(state)
    switch (action.type) {
        case "searchText":
            return {
                ...state,
                search: action.payload
            }
        case "searchStatus":
            return {
                ...state,
                status: action.payload
            }
        case "prorityChange":
            return {
                ...state,
                prioritiese: action.payload
            }
        default:
            return state;

    }
};
export default filterReducer;
