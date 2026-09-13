import './App.css';
import {useState} from 'react'; 
import { greeting } from './compoenets/GreetingCard';
import { handleChange } from './compoenets/InputCard';
import { TodoList } from './compoenets/TODO';

const style = {
  color: 'blue',
  fontSize: '20px',
  fontWeight: 'bold',
};
function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [loginStatus, setLoginStatus] = useState(true);
 
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(event) => handleChange(event, setInputValue)}
      />
      <p style={style}>{greeting(loginStatus, inputValue)}</p>
      <p>Welcome to  first React app.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
      <button onClick={() => setLoginStatus(!loginStatus)}>
        {loginStatus ? 'Logout' : 'Login'}
      </button>
      <TodoList />
    </>
  );
}

export default App;
