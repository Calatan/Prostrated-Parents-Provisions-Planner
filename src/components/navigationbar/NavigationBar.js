import React, { useContext } from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/cooking.png'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { Profile } from '../profile/Profile'

export const NavigationBar = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const logout = () => {
        setAuthenticatedUser()
        history.push('/')
    }

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser)
        ? <div className="profile"><Profile /><span onClick={() => logout()} className="signOut">Sign Out</span></div>
        : <span onClick={() => history.push('/signin')} className="signIn">Sign In</span>
    }

    return (
        <div className="navigationBarWrapper">
            <img onClick={() => history.push('/')}
                className="logotype"
                src={Logotype}
                alt="Error..." />                
            <div className="header" onClick={() => history.push('/')}><h2>Prostrated Parents' Provisions Planner</h2></div>
            {displayUserIfAuthenticated()}
        </div>
    )
}