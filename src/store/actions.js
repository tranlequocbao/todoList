export const addTodo = (data) => {
    return {
        type: "addTodo",
        payload: data,
    };
};

export const toggleTodoStatus = (id) => {
   
    return {
        type: "toggleTodoStatus",
        payload: id,
    };
};
export const searchText=(text)=>{
    return{
        type:"searchText",
        payload:text,
    }
}
export const searchStatus=(status)=>{
    return{
        type:'searchStatus',
        payload:status
    }
}
export const priorityChange=(priorities)=>{
    return{
        type:'prorityChange',
        payload:priorities
    }
}
