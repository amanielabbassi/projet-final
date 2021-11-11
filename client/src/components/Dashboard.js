import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { currentUser, logout } from "../JS/actions/user"
import Home from '../components/home/Home'

const Dashboard = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.userReducer.user)
    const loading = useSelector(state => state.userReducer.loading)
    
    useEffect(() => {
        dispatch(currentUser())
    }, [])
    
    return (
        <div>
            <button onClick={() => { dispatch(logout()); history.push("/login") }}>logout</button>
            {loading ? <h1>loading...</h1> :<Home/>}
        </div>
    )
}

export default Dashboard
