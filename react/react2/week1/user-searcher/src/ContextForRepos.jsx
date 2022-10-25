import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const ContextForRepos = createContext();

export default function ReposProvider({ children }) {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/HackYourFuture/repos')
        .then(res => res.json())
        .then(data => {
            setRepos(data)
        });
    }, [])

    return (
        <ContextForRepos.Provider 
            value={{repos}}>
            {children}
        </ContextForRepos.Provider>
    )
}