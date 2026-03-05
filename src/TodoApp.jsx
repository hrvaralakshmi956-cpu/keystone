import React from "react";
import { useState } from "react";

function TodoApp() {

    const [todoList,setTodoList]=useState([]);
    const [enteredTodo,setEnteredTodo]=useState("");

     function handletodoChange(e){
         setEnteredTodo(e.target.value)
    }
    function handleAddtodo(){
       setTodoList((prev)=>([...prev,enteredTodo]));
    }
    console.log("todo list array",todoList);

    return (
        <div>
            <input type="text" 
            name="" 
            id="" 
            placeholder='Enter Todo' onChange={handletodoChange}/>
            <button onClick={handleAddtodo} >Add todo task</button>

            {
               todoList.map((task)=>{
                return <div className="taskBox">
                    <p>{task}</p>
                    <button onClick={()=>{
                        const filteredTasks=todoList.filter((i)=>{
                        return i!==task;
                        })
                        setTodoList(filteredTasks);
                    }}>delete</button>
                </div>
               })

            }
        </div>
    );
}

export default TodoApp
