import './App.css'
import UserContextProvider from './context/UserContextProvider';
import LoginForm from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <h1>
        React is Running || Mini Context
        <LoginForm />
        <Profile />
      </h1>
    </UserContextProvider>
  );
}

export default App;
