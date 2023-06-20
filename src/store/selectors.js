
export const filtersText = (state) => state.filters.search;
export const changeStatus = (state) => state.filters.status;
export const priorityChange = (state) => state.filters.prioritiese;
export const selectorTodoList = (state) => {
    // const todosRemaining = state.todoList.filter((todo)=>{
    //     const filterTextEx = filtersText(state)
    //     const statusChange = changeStatus(state)

    //     if(statusChange==='All')
    //     return todo.name.toLowerCase().includes(filterTextEx.toLowerCase())
    //     else{

    //         if(statusChange==='Completed'){

    //             return todo.name.toLowerCase().includes(filterTextEx.toLowerCase())&& todo.completed===true && priorityChange.
    //         }
    //         else{
    //             return todo.name.toLowerCase().includes(filterTextEx.toLowerCase())&& todo.completed===false
    //         }
    //     }
    // })
    // return todosRemaining 

    var todoList = state.todoList
    const text = filtersText(state)
    const status = changeStatus(state)
    const priority = priorityChange(state)
    if (status !== 'All') {
        todoList = todoList.filter(val => status === 'Completed' ? val.completed === true : val.completed === false)

    }
    if (priority.length > 0) {
        todoList = todoList.filter(val => priority.includes(val.priority))
       
    }
    todoList = todoList.filter(val => val.name.toLowerCase().includes(text.toLowerCase()))

    return todoList


};
