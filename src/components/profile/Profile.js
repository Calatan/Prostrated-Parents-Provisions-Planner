import React, { useContext } from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'
import './Profile.css'

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUSer] = useContext(UserContext)

    return (
        <div className="profileWrapper">
            <img className="profileImage" src={"https://www.thispersondoesnotexist.com/image"} alt="" />
            <span className="displayedUserName">{authenticatedUser}</span>
        </div>
    )
}