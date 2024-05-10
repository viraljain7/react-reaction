
import './App.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (

    <div className="p-4 w-[100vw] h-[100vh]" >


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
