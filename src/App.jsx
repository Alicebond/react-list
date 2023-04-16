import { useState } from "react";
import "./App.css";
import Overview from "./Overview";

function App() {
  const [input, setInput] = useState("");
  const [renderList, setRenderList] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setRenderList((prevList) => [...prevList, input]);
  }

  function handleDelete(id) {
    setRenderList((prevList) => prevList.filter((i, index) => index !== id));
  }

  const lists = renderList.map((i, index) => (
    <Overview key={index} id={index} content={i} onClick={handleDelete} />
  ));

  return (
    <div className="App">
      <ul>{lists}</ul>
      <form>
        <label htmlFor="task">Enter task</label>
        <input type="text" id="task" onChange={handleChange}></input>
        <button className="btn" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
