const todolist =[ 
    {
        id:1,
        description:"Pay bills ",
        deadline: "Thu Sep 1 2022."
    },
    {
        id:2,
        description:"React1 week1 homework",
        deadline: "Fri Sep 30 2022."
    },
    {
        id:3,
        description:"car service",
        deadline: "Oct 1 2022."
    },
]


export default function Todolist(){
    return(
        <div className="ul"> 
<ul>  
        {todolist.map(todo=><TodoListTask todo={todo} key={todo.id} />)}
</ul>
</div>
    )
}
 function TodoListTask({todo}){
    return <li> {todo.description},{todo.deadline}</li>
} 


