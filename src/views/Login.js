import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Image, Button } from "react-bootstrap";
import Logo from "../assets/logo.svg";

import "./Login.scss";

const Login = ({ text, auth }) => {
    
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const navigate = useNavigate();

    const handleSubmit = () => {
        auth.login(name, account, navigate('/dashboard') );
    }
    

    return(
        <section className="login">
            <div className="login_container"> 
                <Row>
                    <Col className="text-center text-light">
                        <Image className="p-5" src={Logo} />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="lead">
                                    <strong>Nome e Sobrenome</strong>
                                </Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="lead">
                                    <strong>Número de conta</strong>
                                </Form.Label>
                                <Form.Control type="number" value={account} onChange={(e) => setAccount(e.currentTarget.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="lead">
                                    <strong>Senha</strong>
                                </Form.Label>
                                <Form.Control type="password" placeholder="" />
                            </Form.Group>
                            
                                <Button variant="success"  className="btn-purple mt-3"  type="submit" onClick={handleSubmit}>
                                    Entrar
                                </Button>
                            
                        </Form>
                    </Col>
                </Row>
            </div>
        </section>
    );

};

export default Login;