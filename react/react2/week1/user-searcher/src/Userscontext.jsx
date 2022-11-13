import React, { useState } from "react";
import { createContext } from "react";

export const UsersContext = createContext();

export default function UserProvider({ children }) {
    const [query, setQuery] = useState("");
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchUser = (e) => {
        setQuery(e.target.value);
        if(query !== "") {
            setLoading(true)
            fetch(`https://api.github.com/search/users?q=${query}`)
            .then(res => res.json())
            .then(data => {
                if(data.message) {
                    setError(data.message);
                    setUsersData([]);
                } else {
                    setUsersData(data.items);
                    setError("");
                }
                setLoading(false)
            }).catch((error) => setError(error))
        }
    }
   

    return (
        <>
            <h1> Search For Github User </h1>
            <input type="text" value={query} onChange={fetchUser}/>

            <UsersContext.Provider
                value={{loading, error,usersData}}>
                {children}
            </UsersContext.Provider>
        </>   
    )
}
