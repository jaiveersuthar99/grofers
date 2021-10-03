import React, { useState, useEffect } from 'react';

export default function Test() {
  const [count, setCount] = useState(0);



  return (
    <div className="p-4 border bg-dark text-white border-5 border-warning  rounded-3">
      <h2 className="p-2">Testing only</h2>
      <p>You clicked <span className="badge bg-primary mx-1">{count} </span> times</p>
      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}