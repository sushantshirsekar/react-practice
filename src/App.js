import React, { useCallback, useState } from "react";
import "./App.css";
import ListItems from "./ListItems";

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
  const getData = useCallback(() => {
    console.log("function called"); 
    return [value, value+1, value+2]; 
  }, [value]); 
  return (
    <div className={theme ? "bg-dark" : "bg-light"}>
      <input value = {value} onChange={inputHandler} />
      <p>{value}</p>
      <button onClick={incrementHandler}>+</button>
      <button onClick={themeHandler} >Toggle Theme</button>
      <ListItems getData = {getData}/>
    </div>
  );
};
export default App;
