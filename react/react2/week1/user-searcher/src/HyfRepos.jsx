import { useContext } from "react";
import { ContextForRepos } from "./ContextForRepos";


export default function HyfRepos() {
    const {repos}  = useContext(ContextForRepos);
   
    return (
        <div>
            <h1>Hack Your Future Repositories</h1>
            <ul>
                {repos.map(repo => {
                    return ( 
                        <li key={repo.id}>{repo.name}</li> 
                    )
                })}
            </ul>
        </div>
    )
    }