/*import { useState} from "react"

function TodoApp() {

    const [input, setInput] = useState("")
    const [tarea, setTarea] = useState([])
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }  
      
    const handleSubmit = (e) =>{
       console.log('hola')
         e.preventDefault();
        if (input.length === 0) {
            setTareas(tareas.concat(input))
        }     
    } 

    
    const handleKeyDown = (e) => {       
        if (e.key === "Enter") {
            setTarea(tarea.concat(input));
            setInput("");
    }
        return (
            <div>
                <h2>Tareas pendientes</h2>
                <div>
                    <TodoLists tarea={setTarea} />
                    <form onSubmit={handleSubmit}>
                        <label>
                            Que te gustaría hacer?
                        </label>
                        <input
                            id="input"
                            onChange={handleChange}
                            value={input}
                            onKeyDown={handleKeyDown}
                        />
                        <button>Añadir tarea</button>
                    </form>
                </div>
            </div>
        );
}


function TodoLists() {
    
    return (
        <ul>
            {tarea.map(item => (
                <li key={item.id}>{item}</li>
            ))}
        </ul>
    );
}


export default TodoApp;

*/