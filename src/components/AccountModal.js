import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";


const AccountModal = ({show, handleClose, auth}) => { 
    
    const navigate = useNavigate();

    const [name, setName] = useState();

    const handleSubmit =  () => {
        auth.login(name, '12345', navigate('/dashboard') );
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Abra sua conta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Seu nome</Form.Label>
                        <Form.Control type="name" placeholder="seu nome" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Seu e-mail</Form.Label>
                        <Form.Control type="email" placeholder="seu e-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>Sua cidade</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Escolha a sua cidade</option>
                            <option value="1">São Paulo - SP</option>
                            <option value="2">Rio de Janeiro - RJ</option>
                            <option value="3">Minas Gerais - MG</option>
                        </Form.Select>
                    </Form.Group>

                
                    <Form.Check 
                        type="checkbox"
                        id="custom-checkbox"
                        label="Eu li e concordo com os termos de uso"
                    />
                        
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Criar Conta
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AccountModal;