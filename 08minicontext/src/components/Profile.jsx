import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) return <h1>User please enter details</h1>
    return <h1>
        {user.username}
    </h1>

}

export default Profile
