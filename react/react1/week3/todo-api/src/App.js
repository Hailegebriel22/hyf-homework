import React from 'react'
import Timer from './Timer';
import TodoList from './TodoList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
