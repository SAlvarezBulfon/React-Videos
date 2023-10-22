import { ProgressBar } from 'react-bootstrap';

//Se especifica cuales son los props y el tipo de dato que el componente hijo recibe
type DangerBarProps = {
    value: number;
}

//El componente hijo tiene argumentos del tipo DangerBarProps
const DangerInput = ({value}:DangerBarProps) => {
    //Logica segun el valor recibido del componente padre se mostrara un color diferente
    const getVariant = (value:number) => {
        if(value < 30){
            return 'success';
        } else if (value < 60){
            return 'warning';
        } else {
            return 'danger';
        }
    }
    return (
        <ProgressBar variant={getVariant(value)} now={value} animated />
    );
}

export default DangerInput;