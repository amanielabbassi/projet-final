import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from "../../JS/actions/user"
import { useHistory, Link } from "react-router-dom"
import "./Signup.css"

const Signup = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const handleClick = () => {
        dispatch(registerUser({ name, email, phone, password }, history));
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
    }

    return (
        <div>
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>
                <div className="input-container ic1">
                    <input id="Name" className="input" type="text" placeholder=" " value={name} onChange={(e) => setName(e.target.value)} />
                    <div className="cut" />
                    <label htmlFor="Name" className="placeholder">Name</label>
                </div>
                <div className="input-container ic2">
                    <input id="email" className="input" type="text" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="cut" />
                    <label htmlFor="email" className="placeholder">Email</label>
                </div>
                <div className="input-container ic2">
                    <input id="phone" className="input" type="text" placeholder=" " value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <div className="cut" />
                    <label htmlFor="phone" className="placeholder">Phone</label>
                </div>
                <div className="input-container ic2">
                    <input id="password" className="input" type="text" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="cut cut-short" />
                    <label htmlFor="Password" className="placeholder">Password
                    </label></div>
                <button type="text" className="submit" onClick={handleClick}>submit</button>
                <span>user already exist <Link to="/login">Signin</Link></span>
            </div>
        </div>
    )
}

export default Signup
