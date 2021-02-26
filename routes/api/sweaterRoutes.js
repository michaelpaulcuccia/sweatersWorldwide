import express from 'express';
export const router = express.Router();
import Sweater from '../../models/Sweater.js';
import expressAsyncHandler from 'express-async-handler';

//GET all sweaters
//ROUTE: /api/sweaters
const getAllSweaters = expressAsyncHandler(async (req, res) => {

    //empty object provides all
    const sweaters = await Sweater.find({});
    res.json(sweaters);

})
router.route('/').get(getAllSweaters);

//GET sweater, by ID
//ROUTE: /api/sweaters/:id
const getSweaterById = expressAsyncHandler(async (req, res) => {

    const sweater = await Sweater.findById(req.params.id);

    //ensure that sweater exists
    if (sweater) {
        res.json(sweater);
    } else {
        res.status(404);
        throw new Error('Product Not Found');
    }

})
router.route('/:id').get(getSweaterById);

export default router;