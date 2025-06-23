import React, { useRef, useState } from "react";

function Testing() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const btnRef = useRef(0);

  function handleAdd() {
    setCount((prev) => prev + 1);
    countRef.current += 1;
  }

  function handleMinus() {
    setCount((prev) => prev - 1);
    countRef.current -= 1;
    // btnRef.current.style.width = "100px";
  }

  return (
    <div className="w-full h-[100vh] flex gap-3 justify-center items-center">
      <button
        ref={btnRef}
        onClick={handleMinus}
        className="p-4 bg-red-400 rounded-lg"
      >
        -
      </button>
      {count},{countRef.current}
      <button onClick={handleAdd} className="p-4 bg-green-400 rounded-lg">
        +
      </button>
    </div>
  );
}

export default Testing;
