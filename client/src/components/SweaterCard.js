import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import noImage from '../noImage/noImage.PNG';

const SweaterCard = ({ history }) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const sweaters = await axios.get('/api/sweaters');
        setData(sweaters.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onClickHandler = (item) => {
        history.push(`/sweaterview/${item._id}`)
    }

    return (
        <>
            { data && data.map(item => (
                <Col
                    sm={12} md={6} lg={4} xl={3}
                    key={item._id}
                >
                    <Card
                        style={{
                            maxHeight: "720px",
                            maxWidth: "576px",
                            marginBottom: '10px'
                        }}
                    >
                        <Card.Img variant="top" src={item.image && item.image !== null ? item.image : noImage} />
                        <Card.Title className='text-center'>{item.title}</Card.Title>
                        <Button type='button' onClick={() => onClickHandler(item)}>Details</Button>
                    </Card>
                </Col>
            ))
            }
        </>
    )
}

export default SweaterCard