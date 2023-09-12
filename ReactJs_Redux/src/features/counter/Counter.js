import React,{useState} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { increment, decrement , reset, incrementByAmount} from "./counterSlice";

const Counter =() => {

    const count =useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0; //number validation

    const resetAll = () => {
        setIncrementAmount(0); //input value make to 0
        dispatch(reset());     // state value male 0, inside ./counterSlice
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input type="text"  value={incrementAmount}  
                 onChange={(e) => setIncrementAmount(e.target.value)} />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}

export default Counter