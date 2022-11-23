import React from 'react';
import { Button, Card, Col, Container, Row} from 'react-bootstrap';
import Slider from './components/Slider';


export function Home() {
    return (
        <>
       <Slider />
       {/* <Container style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
            <Row>
                <Col>   
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant='top' src={north}></Card.Img>
                        <Card.Body>Card</Card.Body>
                        <Card.Text>React</Card.Text>  
                    </Card>
                    <Button variant='primary'>Learn more</Button>
                </Col>
            </Row>
       </Container> */}
        </>
    );
}