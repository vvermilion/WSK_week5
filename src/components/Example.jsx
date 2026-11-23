import { useState, useEffect, useRef } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Use effect triggered')
  }, [count]);

  //useref
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  }

  const addWithState = () => {
    setCount(count + 1);

  }

  return (
    <div>
      <p>Count: {count}</p>
      <button className="examplebutton" onClick={addWithState}>
        Add
      </button>
      <h3>UseRef demo</h3>
      <input type="text" name="name" id="name" ref={inputRef} />
      <br />
      <button className="examplebutton" onClick={handleFocus}>
        Focus input
      </button>
    </div>
  );
}

export default Example
