import React,{useState, useEffect, useCallback} from "react";
import TodoItem from "./TodoItem";
  
const API_URL= 'https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw';

export default function TodoList() {
    const [description, setDescription] = useState('');
    const [ deadline, setDeadline]= useState('');
    const [todoLists, setTodoLists] = useState([]);
    

    const fetchTodo = useCallback( () => {
    fetch(API_URL).then((response) => response.json())
                .then(res=>{setTodoLists(res)})
    }, [])  
  
    const addTodo = (deadline,description) => {
            setTodoLists((todos) => [...todos, {
            id: Date.now(),
            description:description,
            deadline: deadline}]);
    };

    useEffect(() => {
      fetchTodo();
    }, [fetchTodo]);


    function deleteTaskClick(id) {
      const newList = todoLists.filter((item) => item.id !== id);
      setTodoLists(newList);      
    }
    
    function onUpdateTodo(todoId, description) {
        todoLists.forEach(todo => {
          if(todoId === todo.id) {
            todo.description = description;
          }
      })
    setTodoLists(todoLists)
}
 
  return (
    <div className="add-list-input">
      Description: <input  type="text" value={description} onChange={(e)=>{setDescription(e.target.value)
                }} /> 
   
               <br />
      Deadline: <input type="date" value={deadline} onChange={(e)=>{setDeadline(e.target.value)}} /> 

              <br/>
              <button onClick={addTodo}>Add todo</button>
            { 
            (todoLists.length !== 0) ?
            <ul>  
                 {todoLists.map((task)=> (<TodoItem key={task.id} task={task}  onDelete={deleteTaskClick} onUpdateTodo={onUpdateTodo}/>))}
      
            </ul>
            :
            <h3> NO ITEMS</h3>
     }
    </div>       
  );
  }
  
   /* function getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();    
    return `${month<10?`0${month}`:`${month}`}${separator}${date}${separator}${year}`
    }
   */
 
