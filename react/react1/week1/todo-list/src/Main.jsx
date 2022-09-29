import React from 'react';
import TodoList from "./TodoList"
import Title from "./Title"
export default function Main() {
    return  ( 
    <div className="main">
        <Title />
        <TodoList />
    </div>
    )
}