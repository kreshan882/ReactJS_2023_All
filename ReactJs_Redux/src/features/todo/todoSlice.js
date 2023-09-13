import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: 'hello' }],
}

export const todoSlice = createSlice({  // export Slice====>  linking all the resuser, initial state od STATE
    name: 'todo',
    initialState,
    reducers: {  //number of function(reduser) to update the STATE
        addTodo: (state,action) => {  
            const todo = {
                id:nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)

        },
        removeTodo: (state,action) => {
                state.todos= state.todos.filter( (todo) => 
                todo.id!=action.payload)
        },
        
    }
});

export const { addTodo, removeTodo} = todoSlice.actions; // export all individual reducers

export default todoSlice.reducer;  //Autowired with store