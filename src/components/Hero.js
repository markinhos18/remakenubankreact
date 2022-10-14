import React from "react";
import { Row, Col, Container, Button, Image } from 'react-bootstrap';
// import Logo from "../assets/logo.svg";
import Logo from "../assets/logo.svg";
import "./Hero.scss";

const Hero = ({onClick}) => (
    <div className="hero">
        <Container className="text-center text-light">
            <Row className="py-lg-5">
                <Col lg className="text-lg-right py-lg-5">
                    {/* <Image className="d-lg-none" src={Logo} /> */}
                    <Image className="d-none d-sm-block p-5" src={Logo} />
                </Col>
                <Col className="align-self-center py-5">
                    <h3>Pague suas contas pelo nosso APP</h3>
                    <Button variant="outline-light" className="fs-3 mt-3" onClick={onClick}>Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Hero;