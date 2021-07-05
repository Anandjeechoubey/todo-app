import './App.css';
import React from 'react';

function App() {
  const [tasks, setTask] = React.useState([]);
  const [toAdd, setToAdd] = React.useState('');

  const handleClick = () => {
    setTask([...tasks, toAdd]);
    setToAdd('');
  }

  const handleDelete = (e) => {
    const { id } = e.target.parentElement;
    const temp = tasks;
    temp.filter(t => t.id === id);
    setTask([...temp])
  }
  return (
    <div className="App">
      <ul>{
        tasks.map((task, id) => {
          return (<li id={id}>{task} <button onClick={handleDelete}>Delete</button></li>)
        })
      }</ul>
      <input type="string" value={toAdd} onChange={(e) => setToAdd(e.target.value)}></input>
      <button onClick={handleClick}>Inc!</button>
    </div >
  );
}

export default App;
