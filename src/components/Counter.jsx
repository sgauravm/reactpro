import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setincrementBy] = useState(1);

  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function increaseIncrement() {
    setincrementBy(incrementBy + 1);
  }

  function decreaseIncrement() {
    setincrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing value by: {incrementBy}</h1>
      <button onClick={increaseIncrement}>Increase increment</button>
      <button onClick={decreaseIncrement}>Decrease increment</button>
    </div>
  );
}
