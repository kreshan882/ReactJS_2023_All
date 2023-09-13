import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({  // export Slice====>  linking all the resuser, initial state od STATE
    name: 'counter',
    initialState,
    reducers: {  //number of function(reduser) to update the STATE
        increment: (state) => {  
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {  // can pass (state) || (state,action)
            state.count += action.payload; // action is payload value (json object value)
        }
    }
});

export const { increment, decrement ,  reset, incrementByAmount} = counterSlice.actions; // export all reducers

export default counterSlice.reducer;  //Autowired with store