import React from "react";
import { Col, Button, Tabs, Tab, Form, Row} from 'react-bootstrap';

import './Pagamentos.scss';

const Pagamentos = () => (

   
        <>
            <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
                <h3 className='mt-4 '>Pagamentos</h3>
                <Tabs className=' pt-lg-5' defaultActiveKey='boleto'>
                    <Tab eventKey='boleto'  title='Boleto'>
                        <Form className="form">
                            <Form.Group className="my-5" controlId="formBarCode" >
                                <Form.Label>Código de barras</Form.Label>
                                <Form.Control type="number" placeholder="Insira o código de barras" />
                            </Form.Group>
                            <Form.Group className="mb-5" controlId="formPaymentType" key='inline-radio'>
                                <Form.Label>Forma de Pagamento</Form.Label>
                                <div className="d-flex">
                                    <Form.Check 
                                        type='radio'
                                        id='debit'
                                        label='Débito em Corrente'
                                        name="paymentType"
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id='credit'
                                        className='ms-4'
                                        label='Cartão de Crédito'
                                        name="paymentType"
                                    />
                                </div>
                            </Form.Group>
                            <Button className="btn-purple">Continuar</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey='transfer'  title='Transferência'>
                        <Form className="form">

                            <Row className="my-5">
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Banco</Form.Label>
                                <Form.Control type="number" placeholder="Selecione"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Agência</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Conta corrente</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Row>


                            <Row className="mb-5">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Valor da Transferência</Form.Label>
                                <Form.Control type="number" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Identificação nos extratos</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Row>

                            <Button className="btn-purple" type="submit">
                                Continuar
                            </Button>
                        </Form>
                    </Tab>
                    
                </Tabs>
            </Col>
        </>

    );



export default Pagamentos;