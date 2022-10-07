import {useState} from "react";

function ToDoList(){
    let [todo, setTodo] = useState('')
    let [list, setList] = useState([])


    const add = () => {
        setList(() => [...list, todo])
        setTodo('')
     
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Todo List</h1>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
            <button onClick={()=>add()} >Add</button>
            <ol>
                {list.map((item, index) => (
                    <li>{item}</li>
                ))}
            </ol>
        </div>

    )
}

export default ToDoList;