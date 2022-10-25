import React from "react";
import { UsersContext } from "./Userscontext";
import { useContext } from "react";

export default function ListUser() {
    const {query, loading, error,usersData}  = useContext(UsersContext);

    return (
        <>
          { (!query  && usersData.length=== 0) && <p> Please enter user</p>}
          {loading && <p>loading....</p>}
          {error && <p style={{width:200}}>{error}</p>}
          { (query && usersData.length=== 0)   ? <p>data not found</p>:
                
                <ul>
                    {usersData.map((user => {
                        return(
                            <li key={user.id} style={{listStyle:"none"}}>
                                {user.login}     
                                <img width={48} src={user.avatar_url} alt="GitHub user avatar" />

                            </li>
                        )
                    }))}
                </ul>  
            }
        </>
    )
}