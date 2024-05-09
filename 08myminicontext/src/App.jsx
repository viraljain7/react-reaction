import './App.css'
import { UserProvider } from './context/user';
import LoginForm from './components/Login';
import Profile from './components/Profile';
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <UserProvider value={{ username, setUsername, password, setPassword }}>
      <h1>
        React is Running || Mini Context
        <LoginForm />
        <Profile />
      </h1>
    </UserProvider>
  );
}

export default App;
