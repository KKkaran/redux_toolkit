import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { decrement, increment } from './CounterSlice'
import { Link } from 'react-router-dom'

export const Counter = () => {
    //connect this component to redux

    const count = useSelector((state: RootState)=> state.counters.values)
    const dispatch = useDispatch();
    
    return (
        <div>
            <h3>Counter: { count }</h3>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <hr />
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            

            <div>
                <Link to={'/home'}>Home</Link>
            </div>
        </div>
    )
}
