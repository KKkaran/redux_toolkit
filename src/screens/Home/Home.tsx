import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { decrementHome, incrementHome } from './HomeSlice'

export const Home = () => {

    const countCounter = useSelector((state: RootState) => state.counters.values)
    const countHome = useSelector((state: RootState)=>state.homeCounter.value)
    const dispatch = useDispatch();

    let total = countCounter + countHome
    
    return (
        <div>
            
            <h1>Home: {total}  </h1>
            <button onClick={()=> dispatch(incrementHome())}>Increment</button>
            <hr />
            <button onClick={()=> dispatch(decrementHome())}>Decrement</button>
            
            <div>
                <Link to={'/'}>Counter</Link>
            </div>


        </div>
    )
}
