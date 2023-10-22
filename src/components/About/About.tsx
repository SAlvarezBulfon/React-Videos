import { Col, Container, Row } from "react-bootstrap";
import CardUtil from "../CardUtil/CardUtil";

const About = () => {
    return (
        <div>
            <Container className="mb-4">
            <h1 className="my-3">About</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odio veniam quas. In, eos officia? Quam sunt nostrum nulla ad, unde beatae hic accusamus non totam et odit dignissimos animi?</p>
               <Row >
                    <Col className="d-flex justify-content-center align-items-center my-3"><CardUtil src="src/assets/images/card1.jpg"/></Col>
                    <Col className="d-flex justify-content-center align-items-center my-3"><CardUtil src="src/assets/images/card2.jpg"/></Col>
                    <Col className="d-flex justify-content-center align-items-center my-3"><CardUtil src="src/assets/images/card3.jpg"/></Col>
                </Row>
            </Container>
        </div>
    );
};
export default About;