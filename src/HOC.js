import { useState } from "react";

const HOC = (UpdatedComponent, entity) => {
  const NewComponent = () => {
    const [count, setCount] = useState(1);
    
    const add = () => {
      setCount((prev) => prev + 1);
    };

    const multiply = () => {
      setCount((prev) => prev * 2);
    };
    

    return (
      <div>
        <div style={{ marginRight: "5rem" }}>
          <h2>{entity === "Add" ? "Counter+1" : "Counter*2"} </h2>
          <button
            onClick={entity === "Add" ? add : multiply}
            style={{
              background: "black",
              color: "white",
              marginLeft: "3.1rem",
            }}
          >
            {entity}
          </button>
          <h2 style={{ textAlign: "center" }}>{count}</h2>
        </div>
        <UpdatedComponent />
      </div>
    );
  };
  return NewComponent;
};

export default HOC;
