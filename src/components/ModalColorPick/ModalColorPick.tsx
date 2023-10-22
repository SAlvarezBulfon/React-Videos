import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

type ModalColorPickProps = {
    show: boolean;
    onHide: () => void;
    handleColorChange: (color: string) => void;
}

const ModalColorPick = ({show, onHide, handleColorChange}: ModalColorPickProps) => {

    const [selectedColor, setSelectedColor] = useState('#fff');
    const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    }

    //Al hacer click en el botón de aceptar se cambia el color del botón
    const handleAccept = () => {
        handleColorChange(selectedColor);
        onHide();
    }

    return (
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Cambiar Color</Modal.Title>
            </Modal.Header>     
            <Modal.Body>
                <Form.Label htmlFor="exampleColorInput">Elije un color</Form.Label> 
                <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#fff"
                    title="Elije tu color"
                    onChange={handleColorPickerChange}
                />
            </Modal.Body>   
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={onHide}>Cancelar</button>
                <button className="btn btn-primary" onClick={handleAccept}>Aceptar</button>
            </Modal.Footer>    
        </Modal>
    );
}

export default ModalColorPick;