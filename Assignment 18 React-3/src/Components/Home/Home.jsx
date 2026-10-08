import { useEffect, useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  // mounting + unmounting
  useEffect(() => {
    console.log("Home Mounted");

    return () => {
      console.log("Home Unmounted");
    };
  }, []);

  // updating 
  useEffect(() => {
    console.log("Count Changed:", count);
  }, [count]);

  // after render
  useEffect(() => {
    console.log("Home Rendered");
  });

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Home</h1>

      <h2>Count: {count}</h2>

      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Home;
