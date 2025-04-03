import React, { useEffect, useState } from "react";

export default function UseEffect() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20); // ✅ Corrected useState usage

  useEffect(() => {
    console.log("hello kal");
    document.title = `count: ${count}`; // ✅ Fixed string concatenation
  }, [count,age]);

  return (
    <div>
      <h1>Function-based component with useState and useEffect</h1>
      <h2>Count is {count}</h2>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment Count
        </button>
      </div>
      <h2>Age is {age}</h2>
      <div>
        <button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
      </div>
    </div>
  );
}
