import '../shared/global/css/Global.css'
import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'

export const SignInView = () => {

    const history = useHistory()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenticatedUser(username)
        localStorage.setItem("username", username)
        history.push('/')
    }

    return(
        <div>
            <div className="signInWrapper">
                <h3>Welcome to the Sign In View!</h3>
                <span>Sign in to randomize and save meals.</span>
            </div>
            <div className="signInForm">
                <span>Username: </span><input onChange={event => setUsername(event.target.value)} /><br/>
                <span>Password: </span><input type="password" onChange={event => setPassword(event.target.value)} /><br/>
                <span></span><button onClick={() => login()}>Login</button>
            </div>
        </div>
    )
}