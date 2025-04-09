const express= require('express');
const router= express.Router();
const {createTest, submitTest}= require('../controllers/testControllers');

router.post('/createTest', createTest);
router.post('/submit/:testId', submitTest);


module.exports= router;