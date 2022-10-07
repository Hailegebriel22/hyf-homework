import React,{ useState}  from 'react';

export default function TodoList  ({ list, onDelete }) {
    return(
        <ul>
        {list.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </ul>
      );    
} 
    
      function Task ({ task, onDelete })  { 
        //const [checked,setChecked]=useState(false)
        //style={{textDecoration: 'line-through'}}
          
        return( 
        <li> 
          <input type='checkbox' checked={task.done} />
         <span>{task.description}</span>     
         <button type="button" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </li>      
      )
   }
      

     

    