import { v4 as uuid } from 'uuid';
import './App.css';
import { useState } from 'react';



export default function App() {

  const [count, setCount] = useState(0);
  const [ban, setBan] = useState(false);
  const[inputText, setInputText] = useState('');

  function changeInput(event){
      setInputText(event.target.value)
  }

  return (
    <div className='App'>
      <div>
        {!ban && <button onClick={() => setBan(!ban)} >Забанить</button>}
      </div>
      <div>
        {ban && <button onClick={() => setBan(!ban)} >Разбанить</button>}
      </div>

      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

      <div>
        <input value={inputText}  onChange={changeInput}/>
      </div>

    </div>
  )
} 