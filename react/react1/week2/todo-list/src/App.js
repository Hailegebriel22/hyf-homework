import React from 'react';
import AddTodo from './AddTodo'
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className='mainWrapper'>
      <Timer />
      <AddTodo />
    </div>
  );
}

export default App;
