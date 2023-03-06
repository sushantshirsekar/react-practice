import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const InputForm = () => {
  const [demo, setDemo] = useLocalStorage('name',"");
  const inputHandler = (e) => {
    setDemo(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        value={demo}
        placeholder="Enter Demo Text"
        onChange={inputHandler}
      />
    </form>
  );
};
export default InputForm;
