import useUser from '../context/user';

const Profile = () => {
    const { username } = useUser();

    if (!username) return <h1>User please enter details</h1>
    return <h1>
        {username}
    </h1>

}

export default Profile
