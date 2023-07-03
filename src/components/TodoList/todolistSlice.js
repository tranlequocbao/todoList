import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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
                console.log(action);
                state.todoList = action.payload;
                state.status = 'idle';
            })
            .addCase(addNewTodo.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.todoList.push(action.payload);
                console.log(action.payload);
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
                    state.status = 'idle';
                }
            });
    },
});
export default todosSlice;
export const getTodos = createAsyncThunk('todos/fetchTodos', async () => {
    let data = await axios.get('http://10.40.12.4:3005/todoList/getTodos');
    console.log(data);
    return data.data;
});
export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async (todoNew) => {
        let data = await axios.post(
            'http://10.40.12.4:3005/todoList/insertTodo',
            { data: todoNew },
        );
        console.log(data);
        if (data.data === true && data.status === 200) {
            return todoNew;
        } else {
            console.log(data);
        }
    },
);
export const toggleTodoStatusNew = createAsyncThunk(
    'todo/toggleTodoStatus',
    async (todo) => {
        try {
            let data = await axios.post(
                'http://10.40.12.4:3005/todoList/updateStatus',
                { data: todo },
            );
            if (data.data !== 'error' && data.status === 200) {
                console.log(data);
                return todo;
            } else {
                console.log(data);
                return false;
            }
        } catch (err) {
            console.log(err);
        }
    },
);
