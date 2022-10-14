import React, {useState} from "react";
import ChildWrapper from "./ChildWrapper";
export default   function TodoItem({ task, onDelete, onUpdateTodo})  { 
    const [checked,setChecked]=useState(false)
    const [isEditing,setIsEditing]=useState(false)
    const [description, setDescription] = useState(task.description);

    function editTodo(id) {
        setIsEditing(!isEditing);
    
        if(isEditing){
            onUpdateTodo(id, description);
        }       
    } 
      
    return( 
    <li> 
       <ChildWrapper>          
        
       <div className="list-item"> 
      <input onChange={()=>setChecked(!checked)} type="checkbox" checked={checked} />
      { !isEditing ? ( 
     <span style={{textDecoration: checked ? "line-through"  : ""}}>{task.description} | {task.deadline} </span>     
      ):(<input type="text" onChange={(e) => {setDescription(e.target.value)}} value = {description} /> )
    }
     <button className="deleteButton"  onClick={() => onDelete(task.id)}> Delete
      </button>
      <button   className="editButton"  onClick={() => editTodo(task.id)}>{!isEditing? 'Edit' : 'Update'}</button>
      </div>
      
    </ChildWrapper>
    </li> 
  )
}
