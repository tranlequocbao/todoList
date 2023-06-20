const initState = [
        {
            id: 1,
            name: "Learn Vue",
            completed: false,
            priority: "Medium",
        },
        {
            id: 2,
            name: "Learn VueX with vue",
            completed: false,
            priority: "Medium",
        },
        {
            id: 3,
            name: "Read code of ALC and SCADA",
            completed: true,
            priority: "High",
        },
        {
            id: 4,
            name: "Export checksheet quality at Paint shop",
            completed: false,
            priority: "Low",
        },
    ];
const todolistReducer = (state = initState, action) => {
    
    switch (action.type) {
        case "addTodo":
            return [...state, action.payload];  
        case "toggleTodoStatus":
            return state.map((todo)=>todo.id===action.payload?{...todo,completed:!todo.completed}:todo)
        default:
            return state;

    }
};
export default todolistReducer;
