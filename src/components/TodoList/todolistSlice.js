import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as getTodoServices from '../../apiServices/getTodoServices'
import * as insertTodoServies from '../../apiServices/insertTodoServices'
import * as updateStatusTodoServices from '../../apiServices/updateStatusTodoServices'
const todosSlice = createSlice({
    name: 'todoList',
    initialState: { status: 'idle', todoList: [] },
    reducers: {
        addTodo: (state, action) => {
            console.log(state);
            state.todoList.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            let currentTodo = state.find((val) => val.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.todoList = action.payload;
                state.status = 'idle';
            })
            .addCase(addNewTodo.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {

                if (action.payload)
                    state.todoList.unshift(action.payload)
                state.status = 'idle';
            })
            .addCase(toggleTodoStatusNew.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(toggleTodoStatusNew.fulfilled, (state, action) => {
                if (action.payload) {
                    let objectFound = state.todoList.find(
                        (val) => val.id === action.payload,
                    );
                    objectFound.completed = !objectFound.completed;
                }
                state.status = 'idle';
            });
    },
});
export default todosSlice;
export const getTodos = createAsyncThunk('todos/fetchTodos', async () => {
    try {
        const url = 'getTodos';
        let data = await getTodoServices.getTodoList(url)
        return data
    }
    catch (error) {
        console.log(error)
        return false
    }
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (todoNew) => {
    const url = 'insertTodo';
    try {
        let data = await insertTodoServies.insertTodo(url, todoNew)
        if (data) {
            console.log(data)
            return todoNew
        }

        else return false
    }
    catch (error) {
        console.log(error)
    }
});
export const toggleTodoStatusNew = createAsyncThunk(
    'todo/toggleTodoStatus',
    async (todo) => {
        try {
            const url = 'updateStatus'
            const data = await updateStatusTodoServices.updateStatusTodo(url, todo)
            if (data)
                return todo
            else return false
        } catch (err) {
            console.log(err);
        }
    },
);
