import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import noImage from '../noImage/noImage.PNG';

const SweaterView = ({ match }) => {

    const [data, setData] = useState({});

    const item = match.params;
    const { id } = item;

    useEffect(() => {
        const fetchData = async () => {
            const sweater = await axios.get(`/api/sweaters/${id}`);
            setData(sweater.data)
        }
        fetchData()
    }, [])

    return (
        <>
            <Row>
                <Col>
                    <Card
                        style={{
                            maxHeight: "720px",
                            maxWidth: "576px",
                        }}>
                        <Card.Img src={data.image && data.image !== null ? data.image : noImage} />
                    </Card>
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>{data.description}</ListGroup.Item>
                        <ListGroup.Item>Made from: {data.fabric}</ListGroup.Item>
                        <ListGroup.Item>Fit: {data.fit}</ListGroup.Item>
                        <ListGroup.Item>Retail Price: ${data.retailPrice}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default SweaterView;