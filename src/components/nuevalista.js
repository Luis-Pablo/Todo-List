import { useState } from "react";

function TodoApp() {
    const [input, setInput] = useState("");
    const [tarea, setTarea] = useState([]);
    
    const handleChange = (e) => {
        setInput(e.target.value);
    }   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input !== "") { 
            setTarea(tarea.concat(input));
            setInput('')
        }           
    }
    


    console.log(tarea)
    return (
        <div className="container  justify-content-center my-5">
            
            <h2 className="d-block ">Lista de tareas</h2>
 
                <form onSubmit={handleSubmit} className="input-group mb-3">
                    <input type="text" 
                        className="form-control" 
                        placeholder="¿Qué quieres hacer hoy?" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"                                           
                        
                        onChange={handleChange}
                        value={input}
                    />
                    
                </form >

                <span className="input" id="span">Tareas {tarea.length}</span>   



            <div>
                <ul>
                    {tarea.map((item, index)=> 
                        <>
                            <li key={index}>{item} </li>
                            
                            <button onClick={() =>setTarea(tarea.filter(borrar => borrar != item))}>Borrar</button>
                        </>    
                        
                    )}
                    

                </ul>  
                
            </div>    

                
                                 
          
        
               
            
        </div>
    )   

}

export default TodoApp;