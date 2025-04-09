const express= require('express');
const router= express.Router();
const {createTest, getTest}= require('../controllers/testControllers');

router.post('/createTest', createTest);
router.get('/', getTest);


module.exports= router;