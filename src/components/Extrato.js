import React from "react";
import { Col, Table} from 'react-bootstrap';


const Extrato = ({data}) => {

    const {extratoCount} = data;

    return(
        
            <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
                <h3 className='my-5'>Extrato</h3>
                
                <Table striped borderless>
                    <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor (R$)</th>
                        <th>Saldo (R$)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {extratoCount.map(({ date, description, value, saldo }) => (
                        <tr>
                            <td>{date}</td>
                            <td>{description}</td>
                            <td><b>{value}</b></td>
                            <td><b>{saldo}</b></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                      
            </Col>
        
    )

};

export default Extrato;