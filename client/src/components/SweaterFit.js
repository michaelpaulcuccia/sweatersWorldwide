import React, { useState } from 'react';
import { Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

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
                getSweaters(fitted)
                break;
            case "regular":
                let regular = await axios.get('/api/sweaters/fit/regular');
                getSweaters(regular)
                break;
            default:
            //do nothing
        }
    }

    console.log(sweaters)
    console.log(sweaters.length)

    return (

        <>

            <h1 style={{ marginBottom: '18px' }}>Choose a Fit</h1>

            <Row className="px-3">

                <Col>
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
                    <Row>
                        <Col>
                            {sweater.title}
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
