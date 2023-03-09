import { useEffect, useState } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="Timer">
      <p>{counter}</p>

      <button
        onClick={counter}
        type="start"
        className="btn btn-sm bg-accent-focus marg mt-10"
      >
        Start
      </button>
    </div>
  );
}