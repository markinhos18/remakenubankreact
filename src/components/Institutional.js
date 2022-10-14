import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faMobile, faGlobe, faShield, } from "@fortawesome/free-solid-svg-icons";
import "./Institutional.scss";

const Institutional = ({onClick}) => (
    <section className="institutional py-5">
        <Container>
            <Row>
                <Col xs={12} lg={6} className="mb-5 ">
                    <h2 className="my-5 title-primary">Já nascemos digital</h2>

                    <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                    </p>
                    
                    <Row className="mb-2">
                        <Col xs={1} className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faMobileScreenButton}  size="1x" color="white"/>
                        </Col>
                        <Col xs={11} className="">Sem fila e sem burocracia</Col>
                    </Row>
                           
                    <Row className="mb-2">
                        <Col xs={1} className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faMobile} size='1x' color='white'/>
                        </Col>
                        <Col xs={11} >Simples e prático</Col>
                    </Row>
                    
                    <Row className="mb-2">
                        <Col xs={1} className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faGlobe} size='1x' color='white'/>
                        </Col>
                        <Col xs={11} >Abertura de conta 100% online</Col>
                    </Row>

                    <Row className="mb-2">
                        <Col xs={1} className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faShield} size='1x' />
                        </Col>
                        <Col xs={11} >Transações mais seguras</Col>
                    </Row>

                    <Button variant="outline-light" className="mt-4" onClick={onClick}>
                        Abra sua conta
                    </Button>

                </Col>

                <Col xs={12} lg={6}> 
                </Col>
            </Row>
               
        </Container>
    </section>
);

export default Institutional;