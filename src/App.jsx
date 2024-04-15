import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todoText, setTodoText] = useState('');
  const [locationText, setLocationText] = useState('');
  const [todos, setTodos] = useState([]);


  const handleTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleLocationTextChange = (event) => {
    setLocationText(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '' && locationText.trim() !== '') {
      const newTodo = {
        todo: todoText,
        location: locationText,
      };
      setTodos([...todos, newTodo]);
      setTodoText('');
      setLocationText('');  
    }
  };


  return (
    // <div className="flex flex-col min-h-screen">
        <div className="flex flex-col h-[1800px]">
      <div className="flex-grow bg-blue-500 p-4 m-2">
        <div className="bg-red-300 p-4 m-2 fixed w-[90%]">
          <h1 className="text-3xl font-bold underline">2DOIST</h1>
        </div>
        <div className="flex bg-pink-300 p-1 m-2 mt-4 fixed top-[95px]">
        <input
            type="text"
            placeholder="Enter your todo"
            value={todoText}
            onChange={handleTodoTextChange}
            className="border border-gray-400 p-2 mt-0 mr-2"
          />
          <input
            type="text"
            placeholder="Enter location"
            value={locationText}
            onChange={handleLocationTextChange}
            className="border border-gray-400 p-2 mt-0 mr-2"
          />
          <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 mt-0">
            Add Todo
          </button>
        </div>
        <div className="flex flex-col md:flex-row flex-grow overflow-y-auto">
          <div className="flex-grow bg-green-300 p-4 m-2 h-[300px] w-full md:w-[50%] mt-[160px]">
            <h1 className="text-3xl font-bold underline">To Do's</h1>
            <ul className="overflow-y-auto max-h-[240px]">
              {todos.map((todo, index) => (
                <li key={index} className="bg-gray-200 p-2 mt-4 mb-2">{todo.todo} - {todo.location}</li>
              ))}
            </ul>
          </div>
          <div className="flex-grow bg-yellow-300 p-4 m-2 h-[300px] w-full md:w-[50%] mt-[20px] md:mt-[160px]">
            <h1 className="text-3xl font-bold underline">Completed Tasks</h1>
          </div>
        </div>
      </div>
      {/* <footer className="bg-gray-800 text-white p-4 text-center">
        This is the sticky footer
      </footer> */}
      <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
        ToDoist App ©      
      </footer>
    </div>
  );
}

export default App;
