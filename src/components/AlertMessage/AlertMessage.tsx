import { useState } from "react";
import AlertGenerator from "../AlertGenerator/AlertGenerator";
const AlertMessage = () => {
    //Guarda el valor del campo de texto
    const [input, setInput] = useState('');
    // guarda el mensaje
    const[message, setMessage] = useState('');
    //Muestra el componenete hijo segun el estado
    const [showAlert, setShowAlert] = useState(false);

    //Si el campo de texto no está vacío, se guarda el texto que escribió el usuario
    // en "message" y se muestra el componente hijo, de lo contrario se oculta
    const handleClick = () => {
       if(input.trim() !== ''){
           setMessage(input);
           setShowAlert(true);
       }else{
            setShowAlert(false);
       }
    }
    return (
        <div className="m-3">
            <h2>Ejemplo 2</h2>
            {/* Componente padre */}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Mostrar mensaje</button>
            {/* Componente hijo */}
            {showAlert && <AlertGenerator message={message} />}

        </div>
    );
}

export default AlertMessage;