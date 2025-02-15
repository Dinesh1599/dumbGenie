import React, { useState } from 'react'
import './App.css';
import genie from './assets/Norm-profileinfobox.webp'
import dialogue from './assets/dialogue.json'
function App() {

  const [finput, setFinput] = useState(0)

  const checkValue = ()=>{
    if(finput==null || finput ==0 )
      {
      console.log({dialogue})
      alert("nothing")
    }else{
      const number  = finput

    }
  }
  
  const handleKeyDown = (e)=>{
    if(e.key == 'Enter'){
      return checkValue()
    }
  }

  return (
    <div className='frame'>
      <h1>THE SMARTEST GENIE EVER</h1>
      <h2>{`Ahhh, you’ve summoned me, the Great Genie of Useless Mind-Reading! Think of a number—wait, no, just type it. I’ll ‘magically’ guess it with my unmatched mystical powers.`}</h2>
      <img src={genie} alt='genie'/>
      <p>Ok mortal, think of number by typing it in!</p>
      <input type="number" 
        value={finput} 
        placeholder='Dont tell me your number, just type it' 
        onChange={e=>setFinput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={checkValue}>Click me</button>
    </div>
  );
}

export default App;
