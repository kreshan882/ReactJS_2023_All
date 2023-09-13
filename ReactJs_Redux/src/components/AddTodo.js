//rfce --> auto load ?????????
import React,{useState} from "react";
// old: get form data and put into useState 
// new: collect data and send to store
import {  useDispatch, useSelector } from "react-redux"; //useDispatch: send data to store, with reduser help
import { addTodo } from "../features/todo/todoSlice"; //import reduser function to updata store

function AddTodo(){
    const [input, setInput]=useState('')
    const dispatch = useDispatch()

    const addTodoHandeler = (e) => {
        e.preventDefault()

        dispatch(addTodo(input)) // add the inpot and sent to Store , with useDispatch() hook help
        setInput('')  // clean the input
    }

    return(
       
        <form onSubmit={addTodoHandeler} >
            <input type="text" placeholder="enter a todo" value={input} 
            onChange={(e) =>setInput(e.target.value)} />

            <button type="submit">Add Todo</button>

        </form>
    )
}

export default AddTodo;