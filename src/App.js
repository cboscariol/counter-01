import React, {useState} from 'react'
import './App.css';


function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);

  function adicionar() {
    setCounter(counter < 10 ? counter +1 : counter) 
  }

  function subtrair() {
    setCounter(counter > 0 ? counter -1 : counter)
  }

  function limpar() {
    setCounter(0)
  }


  function valorMax() {
    setCounter(10)
  }

  function change(event) {
    setInput(event.target.value)
  }



  return (
    <div className="App">
        <button onClick={adicionar}>+</button>
        <p>{counter}</p>
        <button onClick={subtrair}>-</button>
        <button onClick={limpar}>Limpar</button>
        <button onClick={valorMax}>Valor Máximo</button><br />
        <input type="text" value={counter} onlyRead/><br />
        <input type="number" onChange={change} value={input}/><br />
        <p>{counter * input}</p>
    </div>
  );
}

export default App;
