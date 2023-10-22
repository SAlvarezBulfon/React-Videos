
import Card from 'react-bootstrap/Card';

const CardUtil = (props) =>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className="" src={props.src}
        style={{maxHeight: "190px", objectFit: "cover"}} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default CardUtil;