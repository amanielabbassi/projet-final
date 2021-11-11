import React, { useState } from 'react'
import { loginUser } from "../../JS/actions/user"
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import "./Signin.css"

const Signin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }, history));
        setEmail("");
        setPassword("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} method="get" id="login-form" className="login-form" autoComplete="off" role="main">
                <h1 className="a11y-hidden">Login Form</h1>
                <div>
                    <label className="label-email">
                        <input type="email" className="text" name="email" placeholder="Email" tabIndex={1} required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <span className="required">Email</span>
                    </label>
                </div>
                <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" tabIndex={3} />
                <label className="label-show-password" htmlFor="show-password">
                    <span>Show Password</span>
                </label>
                <div>
                    <label className="label-password">
                        <input type="text" className="text" name="password" placeholder="Password" tabIndex={2} required value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <span className="required">Password</span>
                    </label>
                </div>
                <input type="submit" defaultValue="Log In" />
                <div className="email">
                    <a href="#">Forgot password?</a>
                </div>
                <figure aria-hidden="true">
                    <div className="person-body" />
                    <div className="neck skin" />
                    <div className="head skin">
                        <div className="eyes" />
                        <div className="mouth" />
                    </div>
                    <div className="hair" />
                    <div className="ears" />
                    <div className="shirt-1" />
                    <div className="shirt-2" />
                </figure>
            </form>

        </div>
    )
}

export default Signin
