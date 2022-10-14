import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import './CenteredButton.scss';


const CenteredButton = ({children, onClick}) => (
    <Container>
        <Row className="d-flex justify-content-center">
            <Button className="my-5 px-5 py-3 btn-purple btn-count" size="lg" onClick={onClick}>
                {children}
            </Button>
        </Row>
    </Container>
);

export default CenteredButton;