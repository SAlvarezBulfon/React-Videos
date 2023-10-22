import {TrashFill} from 'react-bootstrap-icons';
interface DeleteButtonProps {
    onClick: () => void;
}

export const DeleteButton = ({ onClick }: DeleteButtonProps ) => {
    return (
       <TrashFill 
       onClick={onClick} 
       color='#d32f2f'
       size={24}
       onMouseEnter={()=>{document.body.style.cursor = 'pointer'}} 
       onMouseLeave={() =>{document.body.style.cursor = 'default'}}/>
    );
};

export default DeleteButton;