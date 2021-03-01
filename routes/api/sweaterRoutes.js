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

//GET sweater, by fit: loose
//ROUTE: /api/sweaters/fit/loose
const getSweatersByFitLoose = expressAsyncHandler(async (req, res) => {

    const type = 'loose';

    //empty object provides all
    const sweaters = await Sweater.find({});

    //create an array where fit matches type
    const matches = sweaters.filter(sweater => sweater.fit === type);
    console.log(matches)

    res.json(matches)

})
router.route('/fit/loose').get(getSweatersByFitLoose);

//GET sweater, by fit: fitted
//ROUTE: /api/sweaters/fit/fitted
const getSweatersByFitFitted = expressAsyncHandler(async (req, res) => {

    const type = 'fitted';

    //empty object provides all
    const sweaters = await Sweater.find({});

    //create an array where fit matches type
    const matches = sweaters.filter(sweater => sweater.fit === type);
    console.log(matches)

    res.json(matches)

})
router.route('/fit/fitted').get(getSweatersByFitFitted);

//GET sweater, by fit: regular
//ROUTE: /api/sweaters/fit/regular
const getSweatersByFitRegular = expressAsyncHandler(async (req, res) => {

    const type = 'regular';

    //empty object provides all
    const sweaters = await Sweater.find({});

    //create an array where fit matches type
    const matches = sweaters.filter(sweater => sweater.fit === type);
    console.log(matches)

    res.json(matches)

})
router.route('/fit/regular').get(getSweatersByFitRegular);

// GET sweater, by ID
// ROUTE: /api/sweaters/:id
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