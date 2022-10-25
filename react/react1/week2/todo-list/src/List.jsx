import React,{ useState}  from 'react';

export default function TodoList  ({ item, onDelete }) {
    return(
        <ul>
        {item.map((task) => (
          <Todo key={task.id} task={task} onDelete={onDelete} />
        ))}
      </ul>
      );    
} 
    
      function Todo ({ item, onDelete })  { 
        const [checked,setChecked]=useState(false)
          
        return( 
        <li> 
          <input onChange={()=>setChecked(!checked)} type="checkbox" checked={checked} />
         <span style={{textDecoration: checked ? "line-through" : ""}}>{item.description} </span>     
         <button className="deleteButton" type="button" onClick={() => onDelete(item.id)}> Delete
          </button>
        </li>      
      )
   }
      

     

    