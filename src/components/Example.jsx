import { useState, useEffect, useRef } from "react";

const Example = () => {
  const [count, setCount] = useState(0);


  // 1. ilman riippuvuustaulukkoa
  // useEffect(fn)

  // 2. komponentin mount vaiheessa
  // useEffect(fn, [])

  // 3. mount vaiheessa sekä count-arvon muuttuessa
  // useEffect(fn, [count])

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
