import './App.css';
import React, {useState} from "react";

import Socket from './components/socket';

function App() {
  const [nombre, setNombre] = useState("")
  const [registrado, setRegistrado] = useState(false);
  const registrar =(e)=>{
    e.preventDefault();
    if(nombre !== ""){
      registrado=true
    }
  }
  return (
    <div className="App">
      <form onSubmit={registrar}>
        <label htmlFor=''>Introduzca su nombre</label>
        <input value={nombre} onChange={e => setNombre(e.target.value)}/>
        <button>ir al chat</button>
      </form>
    </div>
  );
}

export default App;
