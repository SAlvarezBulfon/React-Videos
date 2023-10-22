import { useState } from "react";
import ModalColorPick from "../ModalColorPick/ModalColorPick";

const ButtonColorPick = () => {
    //Color inicial del botón
    const [color, setColor] = useState('#ffc8dd');

    //Manejo del modal
    const [showModal, setShowModal] = useState(false);

    //Función para cambiar el color del botón
    const handleColorChange= (color:string) => {
        setColor(color);
    }

    //Al hacer click en el boton se muestre el modal
    const handleShowModal = () => {
        setShowModal(true);
    }

    return (
        <div className="m-3">
            <h2>Ejemplo 3</h2>
            {/* Componente padre */}
            <button style={{backgroundColor: color}} onClick={handleShowModal}>Seleccionar color</button>
            {/* Componente hijo */}
            {showModal && <ModalColorPick 
            show={showModal} 
            onHide ={() => setShowModal(false)}
            handleColorChange={handleColorChange}  />}
        </div>
    );
}

export default ButtonColorPick;