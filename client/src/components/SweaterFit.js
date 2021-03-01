import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const SweaterFit = () => {

    //get fit type - loose, fitted, regular
    // /api/sweaters/fit

    const onClickHandler = async (arg) => {

        console.log(arg)

        if (arg === 'loose') {
            let req = await axios.get('/api/sweaters/fit/loose');
            console.log(req)
        }
    }

    return (
        <div>
            SweaterFit.js

            <div>
                <Button
                    variant='success'
                    value='loose'
                    onClick={() => onClickHandler('loose')}
                >Loose</Button>
            </div>

            <div>
                <Button
                    variant='warning'
                    value='fitted'
                    onClick={() => onClickHandler('fitted')}
                >Fitted</Button>
            </div>

            <div>
                <Button
                    variant='info'
                    value='regular'
                    onClick={() => onClickHandler('regular')}
                >Regular</Button>
            </div>

        </div>
    )
}

export default SweaterFit
