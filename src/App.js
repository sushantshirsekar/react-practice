import React from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

const App = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Higher Order Functions</h1>
      <div style={{display: "flex", justifyContent: "center", padding:"5rem"}}>
      <Counter1 />
      <Counter2 />
      </div>
    </div>
  );
};
export default App;
