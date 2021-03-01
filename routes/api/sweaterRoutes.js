import express from 'express';
export const router = express.Router();
import Sweater from '../../models/Sweater.js';
import expressAsyncHandler from 'express-async-handler';

/*
//////////////////////////////
G E T  A L L  S W E A T E R S
//////////////////////////////
*/

//GET all sweaters
//ROUTE: /api/sweaters
const getAllSweaters = expressAsyncHandler(async (req, res) => {

    //empty object provides all
    const sweaters = await Sweater.find({});
    res.json(sweaters);

})
router.route('/').get(getAllSweaters);

/*
///////////////////////////////////
G E T  S W E A T E R S  B Y  F I T
///////////////////////////////////
*/

//GET sweater, by fit: loose
//ROUTE: /api/sweaters/fit/loose
const getSweatersByFitLoose = expressAsyncHandler(async (req, res) => {

    const type = 'loose';

    //empty object provides all
    const sweaters = await Sweater.find({});

    //create an array where fit matches type
    const matches = sweaters.filter(sweater => sweater.fit === type);

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

    res.json(matches)

})
router.route('/fit/regular').get(getSweatersByFitRegular);

/*
////////////////////////////////////////
G E T  S W E A T E R S  B Y  S E A S O N 
////////////////////////////////////////
*/

//GET sweater, by season: winter
//ROUTE: /api/sweaters/season/winter
const getSweatersBySeasonWinter = expressAsyncHandler(async (req, res) => {

    const season = 'winter';

    //empty object provides all
    const sweaters = await Sweater.find({});

    //create an array where fit matches type
    const matches = sweaters.filter(sweater => sweater.season === season);

    res.json(matches)

})
router.route('/season/winter').get(getSweatersBySeasonWinter);

//GET sweater, by season: fall
//ROUTE: /api/sweaters/season/fall
const getSweatersBySeasonFall = expressAsyncHandler(async (req, res) => {

    const season = 'fall';

    //empty object provides all
    const sweaters = await Sweater.find({});

    //create an array where fit matches type
    const matches = sweaters.filter(sweater => sweater.season === season);

    res.json(matches)

})
router.route('/season/fall').get(getSweatersBySeasonFall);

/*
/////////////////////////////////
G E T  S W E A T E R S  B Y  I D
/////////////////////////////////
*/

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