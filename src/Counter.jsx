import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      alert("You have clicked 10 times!");
      setCount(0);
    }
  }, [count]);

  const increment = () => {
    setCount((prevCount) => (prevCount >= 10 ? prevCount : prevCount + 1));
  };

  return (
    <div className="counter-card">
      <p className="counter-label">You clicked</p>
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={increment}>
        Click me
      </button>
    </div>
  );
}
export default Counter;