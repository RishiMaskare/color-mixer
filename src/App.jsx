import { useState } from 'react'

function App() {
  const colors = JSON.parse(localStorage.getItem('color'))

  const [r, setR] = useState(colors && colors.r ? colors.r : 0);
  const [g, setG] = useState(colors && colors.g ? colors.g : 0);
  const [b, setB] = useState(colors && colors.b ? colors.b : 0);
  const save = () => {
    localStorage.setItem("color", JSON.stringify({r, g, b}));
  }
  return (
    <>
      <h1>Color Mixer</h1>
      <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, height: 200, width: 200}}></div>
      <label htmlFor="red">Red</label>
      <input id="red" type="range" onChange={(e)=>{setR(e.target.value)}} min={0} max={255} />
      <br />
      <label htmlFor="green">Green</label>
      <input id="green" type="range" onChange={(e)=>{setG(e.target.value)}} min={0} max={255} />
      <br />
      <label htmlFor="blue">Blue</label>
      <input id="blue" type="range" onChange={(e)=>{setB(e.target.value)}} min={0} max={255} />
      <button onClick={save}>Save Color Combination</button>
    </>
  )
}

export default App
