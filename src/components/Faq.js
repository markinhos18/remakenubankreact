import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faWallet, faShield, faUserTie } from "@fortawesome/free-solid-svg-icons";
import './Faq.scss';


const Faq = () => {
    const options = [
        { icon: faCreditCard, text: 'Cartão de crédito' },
        { icon: faWallet, text: 'Conta e abertura' },
        { icon: faShield, text: 'Token digital' },
        { icon: faUserTie, text: 'Produtos e Serviços' }
    ];

    const [index, setIndex] = useState(0);

    const handleClick = (key) => {
        setIndex(key);
    };

    useEffect(() => {
        console.log(index);
    }, [index])

    return (
        <section className="faq py-5">
            <Container>
                <Row>
                    <h2 className="my-5 text-center pb-3">Dúvidas frequentes</h2>
                </Row>
                <Row className="d-flex align-items-center justify-items-center pb-5">
                    <Col xs={12} lg={6}>

                        <Row className="mb-4 d-flex justify-content-around" >
                            {options.map(({ icon, text }, key) => (
                                <div className="itens mb-4" key={key}>
                                    <Col xs={2} className="d-flex justify-content-center align-items-center" onClick={() => handleClick(key)}>
                                        <FontAwesomeIcon icon={icon} className='fa' color={key === index ? 'white' : '#BBB'} />
                                    </Col>
                                    <Col xs={11} className="d-flex align-items-center d-none d-sm-block" color={key === index ? 'white' : '#BBB'} onClick={() => handleClick(key)}>{text}</Col>
                                </div>
                            ))}
                        </Row>
                        <Row className="justify-content-center d-block d-sm-none text-center py-5">
                            <p>{options[index].text}</p>
                        </Row>

                    </Col>

                    <Col xs={12} lg={6}>
                        <Accordion defaultActiveKey='0' activeKey={`${index}`}>

                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Cartão de crédito e débito</Accordion.Header>
                                <Accordion.Body>
                                    Somos contra cobrar tarifas para você cuidar do seu dinheiro. Como usamos canais 100% digitais e reduzimos a burocracia e a papelada ao máximo, conseguimos repassar apenas economias, nunca gastos. A única tarifa existente no Cartão de Crédito Nubank é para quem aderir ao programa de benefícios Nubank Rewards. Diferentemente da maioria dos outros cartões, essa tarifa é opcional e nos possibilita oferecermos ainda mais benefícios para você otimizar a sua vida.
                                    É possível acessar nossa tabela de tarifas na sessão de contratos.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Conta e abertura</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        A conta do Nubank é a nossa conta digital e, assim como tudo no Nubank, foi desenhada para todos que desejam um serviço transparente, simples e sem tarifas abusivas. Ela foi feita para redefinir a maneira como você cuida do seu dinheiro. Para cumprir esse papel, a conta do Nubank:<br />




                                        — Não tem anuidade, nem taxa de manutenção;<br />

                                        — Tem rendimento superior à poupança diário e automático, desde o dia em que seu dinheiro é depositado. Além disso, todos os depósitos contam com algum tipo de garantia;<br />

                                        — Oferece transferências gratuitas e ilimitadas para qualquer banco;<br />

                                        — Tem um cartão com função débito para você fazer compras e saques;<br />

                                        — Possibilita pagamento de boletos como conta de luz, água, telefone e até mesmo compras online.<br />

                                    </p>

                                    <p>
                                        A função débito está disponível para todos os clientes da conta do Nubank! Os clientes interessados em ter um cartão habilitado com essa função devem pedir diretamente pelo nosso app. Abaixo explicamos melhor esse processo.

                                    </p>

                                    <p>

                                        Para quem já possui o novo modelo de cartão de crédito Nubank, lançado em setembro de 2018, basta entrar na área da sua Conta, clicar em 'Pedir função débito' e pronto! Se preferir, pode também arrastar sua tela inicial para cima até a sessão "Descubra Mais" e clicar na opção desejada. Seu cartão já estará habilitado para ambas as funções.
                                    </p>

                                    <p>
                                        Se você possui a versão antiga do cartão Nubank ou não é cliente do cartão de crédito Nubank, basta solicitar o novo cartão com a função débito - nós emitiremos seu cartão já com a função habilitada.

                                    </p>

                                    <p>
                                        Para isso, basta ir em 'Configurações', clicar em 'Pedir função débito', confirmar o endereço de entrega e pronto! Seu cartão já estará em produção.

                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Token digital</Accordion.Header>
                                <Accordion.Body>
                                    Token é um dispositivo eletrônico gerador de senhas que ajuda a manter segurança no app e dispositivo.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Produtos e serviços</Accordion.Header>
                                <Accordion.Body>
                                    Nubank: produtos, app, atendimento e tudo mais que você precisa saber sobre o seu dinheiro.
                                    Cartão de crédito, conta digital, empréstimo pessoal, conta PJ e mais. Conheça os serviços da empresa que vai simplificar sua vida financeira.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                </Row>

            </Container>
        </section>
    )
};

export default Faq;