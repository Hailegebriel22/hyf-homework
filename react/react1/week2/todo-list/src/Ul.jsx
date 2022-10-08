import React,{ useState}  from 'react';

import TodoList from "./List";
import todoList  from './data';
<todoList todoList = {todoList}/>

export default function Ul () { 
  const  [list,setList] = useState(todoList);

  const addTaskClick= ()=> {
    const arryLen = list.length;
    const newTodo = `Todo number ${arryLen + 1} has been Added`;
    const newTodoList = list.concat([{ id: '' + (arryLen + 1) , description: `${newTodo}`}]);
  
   setList(newTodoList)
  }

function deleteTaskClick(id) {
  const newList = list.filter((item) => item.id !== id);

  setList(newList);
}

return ( 
  <>
  <button onClick={addTaskClick}>Add Todo</button>
  <TodoList list={list} onDelete={deleteTaskClick} />
</>
)
};
