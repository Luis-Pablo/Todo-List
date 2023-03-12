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
            
            <h2 className="d-block fw-bold ">Lista de tareas</h2>
 
                <form onSubmit={handleSubmit} className="form-control">
                    <input type="text" 
                        className="form-control" 
                        placeholder="¿Qué quieres hacer hoy?" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"                                           
                        
                        onChange={handleChange}
                        value={input}
                    />
                    
                </form >

                <span className="form-text my-2" id="span">Tareas pendientes {tarea.length}</span>   



            <div>
                <ul>
                    {tarea.map((item, index)=> 
                        <div className="row input-group mb-3">
                            <li className="form-control col-md-6"  key={index}>{item} </li>
                            
                            <button onClick={() =>setTarea(tarea.filter(borrar => borrar != item))}
                                className="justify-content-around btn btn-danger col-md-2 "
                                type="button">
                                
                            Borrar
                            </button>
                        </div>    
                        
                    )}
                    

                </ul>  
                
            </div>    

                
                                 
          
        
               
            
        </div>
    )   

}

export default TodoApp;