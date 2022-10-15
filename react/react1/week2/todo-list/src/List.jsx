import React,{ useState}  from 'react';

export default function TodoList  ({ item, onDelete }) {
    return(
        <ul>
        {item.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
      </ul>
      );    
} 
    
      function Task ({ task, onDelete })  { 
        const [checked,setChecked]=useState(false)
          
        return( 
        <li> 
          <input onChange={()=>setChecked(!checked)} type="checkbox" checked={checked} />
         <span style={{textDecoration: checked ? "line-through" : ""}}>{task.description} </span>     
         <button className="deleteButton" type="button" onClick={() => onDelete(task.id)}> Delete
          </button>
        </li>      
      )
   }
      

     

    