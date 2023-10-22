import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import DangerBar from '../DangerBar/DangerBar';

const DangerInput = () => {
    //Variable que va a guardar el valor elegido por el usuario
    const [value, setValue] = useState(0);

    //Actualizamos el estado de value
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
    }
    return (
        <div className='m-3 w-50'>

            {/* Componente padre*/}
            <h2>Ejemplo 1</h2> 
            <Form.Range value ={value} onChange={handleChange}></Form.Range>  

            {/* Componente hijo*/}      
            <DangerBar value={value} />
        </div>
    );
}

export default DangerInput;