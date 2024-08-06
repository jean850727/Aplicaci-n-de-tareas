import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

    const [input, setInput] = useState ('');

    const manejarCambio = e => {
        setInput(e.target.value);
    };

    const ManejarEnvio = e => {
        e.preventDefault();
        console.log("enviando formulario...");
        
        const tareaNueva = {
            id:uuidv4(),
            texto:input,
            completada:false
        }
        props.onSubmit(tareaNueva);
        
    };

    return (
        < form className='tarea-formulario'
        onSubmit= {ManejarEnvio}>
            <input
                className='tarea-input'
                type='texto'
                placeholder='Escribre una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar tarea
            </button>
        </form>

    );
}

export default TareaFormulario;



