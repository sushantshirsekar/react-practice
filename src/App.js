import React, {  useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(1); 
  const [theme, setTheme] = useState(false); 
  const incrementHandler = () => {
    setValue((prev) => Number(prev) + 1); 
  }
  const inputHandler = () => {
    setValue((prev)=> prev + 1); 
  }

  const themeHandler = () => {
    setTheme((prev)=> !prev);
  }
  const doubleValue = useMemo(()=> {
    double(value)
  },[value]); 
  return (
    <div className={theme ? "bg-dark" : "bg-light"}>
      <input value = {value} onChange={inputHandler} />
      <p>{value}</p>
      <button onClick={incrementHandler}>+</button>
      <button onClick={themeHandler} >Toggle Theme</button>
      <p>{doubleValue}</p>  
    </div>
  );
};

function double(num) {
  for(let i = 0 ; i < 100000000; i++){

  }
  return num*2; 
}
export default App;
