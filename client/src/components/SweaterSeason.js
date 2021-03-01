import React, { useState } from 'react';
import { Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const SweaterSeason = () => {

    const [sweaters, getSweaters] = useState([]);

    const onClickHandler = async (arg) => {

        switch (arg) {
            case "winter":
                let winter = await axios.get('/api/sweaters/season/winter');
                getSweaters(winter.data)
                break;
            case "fall":
                let fall = await axios.get('/api/sweaters/season/fall');
                getSweaters(fall.data)
                break;
            default:
            //do nothing
        }
    }

    return (
        <>

            <h1 style={{ marginBottom: '18px' }}>Choose a Season</h1>

            <Row className="px-3" xs={3}>

                <Col>
                    <Button
                        variant="outline-primary"
                        value='winter'
                        onClick={() => onClickHandler('winter')}
                    >Winter</Button>
                </Col>

                <Col>
                    <Button
                        variant="outline-primary"
                        value='fall'
                        onClick={() => onClickHandler('fall')}
                    >Fall</Button>
                </Col>

            </Row>

            <br></br>

            {sweaters.length ?

                sweaters.map(sweater => (
                    <Row key={sweater._id}>
                        <Col >
                            <Card

                                style={{
                                    maxHeight: "360px",
                                    maxWidth: "288px",
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}>
                                <Card.Img src={sweater.image} />
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

export default SweaterSeason
