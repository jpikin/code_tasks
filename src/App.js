import { v4 as uuid } from 'uuid';
import './App.css';
import { useState } from 'react';



export default function App() {

  const [count, setCount] = useState(0);
  const [ban, setBan] = useState(false);
  const [inputText, setInputText] = useState('');

  const [inputAge, setInputAge] = useState('');
  const [userAge, setUserAge] = useState(0);



  function makeYear(event) {
    const age = event.target.value;
    const currentYear = new Date().getFullYear();
    const yearOfBirth = currentYear - age;
    setInputAge(age);
    setUserAge(yearOfBirth);
  }

  function changeInput(event) {
    setInputText(event.target.value)
  }


  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [parValue, setParValue] = useState('');
  function setSum() {
    setParValue(Number(firstInput) + Number(secondInput));
  }
  function setMult() {
    setParValue(Number(firstInput) * Number(secondInput));
  }

  const [checked, setChecked] = useState(true);

  const [selectValue, setSelectValue] = useState('Выберите город');
  function changeSelect(event) {
    const choise = event.target.value;
    if (choise != 'Сделайте выбор')
      setSelectValue(choise)
  }

  const cityList = ['Moscow', 'Ekb', 'Perm', 'London']
  const [selectValue2, setSelectValue2] = useState();
  const options = cityList.map((city, index) => {
    return <option key={index}>{city}</option> 
  })

  const [ageChoise, setAgeChoice] = useState();
  
  return (
    <div className='App'>
      <div style={{ height: '25px' }}>
        {!ban && <button onClick={() => setBan(!ban)} >Забанить</button>}
      </div>
      <div style={{ height: '25px' }}>
        {ban && <button onClick={() => setBan(!ban)} >Разбанить</button>}
      </div>

      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

      <div>
        <input value={inputText} onChange={changeInput} />
      </div>

      <div style={{ border: '1px solid black', width: '200px' }}>
        <input value={inputAge} onChange={makeYear} />
        <p>{userAge}</p>
      </div>

      <div>
        <input onChange={event => setFirstInput(event.target.value)} />
        <input onChange={event => setSecondInput(event.target.value)} />
        <button onClick={setSum}>sum</button>
        <button onClick={setMult}>mul</button>
        <p>{parValue}</p>
      </div>

      <div>
        <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
        {checked && <p>Здрасте</p>}
        {!checked && <p>Дасвидули</p>}
      </div>

      <div>
        <select value={selectValue} onChange={changeSelect}>
          <option>Сделайте выбор</option>
          <option>Moskow</option>
          <option>Ekb</option>
          <option>Perm</option>
          <option>Abu-Dabi</option>
        </select>
        <p>
          {selectValue === 'Выберите город' ? <span></span> : <span>ваш выбор:</span>} {selectValue}
        </p>
      </div>

      <div>
        <select value={selectValue2}>
          {options}
        </select>
      </div>

<select value={ageChoise} onChange={event => setAgeChoice(event.target.value)}>
<option value='0'>Выберите возраст</option>
<option value='1'>0-12 age</option>
<option value='2'>13-17 age</option>
<option value='3'>18-25 age</option>
<option value='4'>over 25 age</option>
</select>
<p>
  {ageChoise === '1' && 'Вам от 0 до 12 лет'}
  {ageChoise === '2' && 'Вам от 13 до 17 лет'}
  {ageChoise === '3' && 'Вам от 18 до 25 лет'}
  {ageChoise === '4' && 'Вам больше 25 лет'}
</p>
    </div>
  )
} 