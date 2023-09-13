import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({  // create store hear
    reducer: {  // maping issue comeing
        counter: counterReducer,
        todoReducer: todoReducer,  // when read the store need to define propoly
    }

   // reducer: todoReducer,
  
})


// export const store2 = configureStore({  // create store hear
//     reducer: todoReducer,
// })