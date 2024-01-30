import { useState, useEffect } from 'react';

const initialState: number = 3000;

export default function useSetInterval(timer = initialState) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      if (counter >= 2) {
        setCounter(0);
      }
    }, timer);

    return () => clearInterval(interval);
  }, [counter, timer]);

  return counter;
}
