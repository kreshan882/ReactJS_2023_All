import React,{useState} from "react";
import {   useSelector } from "react-redux"; 


import { useDispatch } from "react-redux"; //useDispatch: send data to store, with reduser help
import { removeTodo } from "../features/todo/todoSlice"; 

function Todos(){

     const todos = useSelector(state => state.todoReducer.todos)
     console.log(todos);

     const dispatch = useDispatch()

    return(
        <>
       <div>------------------</div>
       {todos.map((todo) => (
        
            <li key={todo.id} className="mt-4 flex"> 
                <div> {todo.text}</div>
                <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
            </li>
       
       
       ) )}
       </>
    
    )
}

export default Todos;