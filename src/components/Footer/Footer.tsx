import { Col, Container, Nav, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
    return (
        <footer style={{ backgroundColor: '#22333b', color: '#fff', padding: '20px 0' }}>
        <Container>
          <Row>
            <Col md={4}>
              <h5>Our Company</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </Col>
            <Col md={4}>
              <h5>Links</h5>
              <Nav className="d-flex flex-column" style={{ listStyle: 'none', padding: 0 }}>
                <Nav.Link onClick={() => navigate ('/')} style={{ color: '#fff' }}>Home</Nav.Link>
                <Nav.Link onClick={() => navigate ('/componentes')} style={{ color: '#fff' }}>Componentes</Nav.Link>
                <Nav.Link onClick={() => navigate ('/administracion')} style={{ color: '#fff' }}>Administracion</Nav.Link>
              </Nav>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <p>Email: example@gmail.com</p>
              <p>Phone: +123 456 789</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer;