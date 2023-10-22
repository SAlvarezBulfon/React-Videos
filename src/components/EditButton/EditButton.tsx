
import {PencilFill} from 'react-bootstrap-icons';
interface EditButtonProps {
    onClick: () => void;
}

export const EditButton = ({ onClick }: EditButtonProps ) => {
    return (
       <PencilFill 
       onClick={onClick} 
       color='#fbc02d'
       size={24}
       onMouseEnter={()=>{document.body.style.cursor = 'pointer'}} 
       onMouseLeave={() =>{document.body.style.cursor = 'default'}}/>
    );
};

export default EditButton;