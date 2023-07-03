import { createSelector } from '@reduxjs/toolkit';

export const filtersText = (state) => state.filters.search;
export const changeStatus = (state) => state.filters.status;
export const priorityChange = (state) => state.filters.prioritiese;
export const todoListSelector = (state) => state.todoList.todoList;
export const statusTodolist = (state) => state.todoList.status;

export const selectorTodoList = createSelector(
    todoListSelector,
    filtersText,
    changeStatus,
    priorityChange,
    (todoList, text, status, priority) => {
        if (status !== 'All') {
            todoList = todoList.filter((val) =>
                status === 'Completed'
                    ? val.completed === 1
                    : val.completed === 0,
            );
        }
        if (priority.length > 0) {
            todoList = todoList.filter((val) =>
                priority.includes(val.priority),
            );
        }
        if (todoList.length > 0) {
            todoList = todoList.filter((val) =>
                val.name.toLowerCase().includes(text.toLowerCase()),
            );
        } else todoList = [];
        return todoList;
    },
);
export const selectorStatusTodoList = createSelector(
    statusTodolist,
    (loading) => {
        return loading;
    },
);
