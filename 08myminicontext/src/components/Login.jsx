import useUser from '../context/user';

const LoginForm = () => {
    const { username, setUsername, password, setPassword } = useUser()

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset the form after submission
        setUsername('');
        setPassword('');
    };

    return (
        <div className='bg-gray-500'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='m-4'>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className='m-4'>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit" className='bg-black  text-white border rounded-md m-2 py-3 px-4'>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
