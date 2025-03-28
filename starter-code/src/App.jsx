import { useState } from "react";
import './index.css';
function App()  {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState("false");
  const nextColor = color==="red" ? "blue" : "red";

  const changeColor = () => {
    setColor(nextColor);
  }

  const handleButtonEnable = () => {
    setDisabled(!disabled);
  }

  return (
    <div className="app">
      <h1>React Testing Library</h1>
      <button disabled={disabled} onClick={changeColor} className={color} >Click to make it {nextColor}!</button>
      <br />
      <input type="checkbox" onChange={handleButtonEnable}/>
    </div>
  );
}

export default App;