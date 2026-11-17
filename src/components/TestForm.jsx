import { useState } from "react";

const TestForm = () => {

  const[username, setUsername] = useState('');
  const handleChange = (event) => {
    console.log(event.value);
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Lähetetään', username)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input type="text" name="user" id="username" value={username} onChange={handleChange}/>
        <button className="examplebutton">Lähetä käyttäjä</button>
      </form>
    </div>
  );
}

export default TestForm
