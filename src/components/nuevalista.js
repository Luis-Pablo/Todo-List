import { useState } from "react";

function TodoApp() {
    const [input, setInput] = useState("");
    const [tarea, setTarea] = useState([]);

   
/*
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setTarea(tarea.concat(input));
            
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }
*/
    return (
        <div>
            <h2>Tareas pendientes</h2>
            <div>
                
                <form>
                    <label>
                        Que te gustaria hacer hoy?
                    </label>
                    <input
                        id="input"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {  
                                setTarea(tarea.concat(input));
                                setInput("");
                            }
                        }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </form>
            </div>
            <div>
                <TodoLists items={tarea } />
            </div>
        </div>
    )

    function TodoLists(props) {
        return (
            <ul>
                {props.items.map((item) => {
                    <li key={item.id}>{item }</li>
                })}
            </ul>
        )
    }
}

export default TodoApp;