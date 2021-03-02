import React, { useState } from 'react';
import { Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import noImage from '../noImage/noImage.PNG';

const SweaterFit = () => {

    const [sweaters, getSweaters] = useState([]);

    const onClickHandler = async (arg) => {

        switch (arg) {
            case "loose":
                let loose = await axios.get('/api/sweaters/fit/loose');
                getSweaters(loose.data)
                break;
            case "fitted":
                let fitted = await axios.get('/api/sweaters/fit/fitted');
                getSweaters(fitted.data)
                break;
            case "regular":
                let regular = await axios.get('/api/sweaters/fit/regular');
                getSweaters(regular.data)
                break;
            default:
            //do nothing
        }
    }

    return (

        <>

            <h1 style={{ marginBottom: '18px' }}>Choose a Fit</h1>

            <Row className="px-3" xs={3}>

                <Col >
                    <Button
                        variant="outline-primary"
                        value='loose'
                        onClick={() => onClickHandler('loose')}
                    >Loose</Button>
                </Col>

                <Col>
                    <Button
                        variant="outline-primary"
                        value='fitted'
                        onClick={() => onClickHandler('fitted')}
                    >Fitted</Button>
                </Col>

                <Col>
                    <Button
                        variant="outline-primary"
                        value='regular'
                        onClick={() => onClickHandler('regular')}
                    >Regular</Button>
                </Col>
            </Row>

            <br></br>

            {sweaters.length ?

                sweaters.map(sweater => (
                    <Row key={sweater._id}>
                        <Col>
                            <Card
                                style={{
                                    maxHeight: "360px",
                                    maxWidth: "288px",
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}>
                                <Card.Img src={sweater.image && sweater.image !== null ? sweater.image : noImage} />
                            </Card>
                        </Col>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item>{sweater.description}</ListGroup.Item>
                                <ListGroup.Item>Made from: {sweater.fabric}</ListGroup.Item>
                                <ListGroup.Item>Fit: {sweater.fit}</ListGroup.Item>
                                <ListGroup.Item>Retail Price: ${sweater.retailPrice}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

                ))

                :
                <>
                </>
            }

        </>
    )
}

export default SweaterFit
