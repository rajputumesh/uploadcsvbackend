const express = require('express');
const app = express();
let router = express.Router();

const { login, register } = require('../Controller/AuthController');
const { registervali, loginvali } = require('../Validation/AuthValidation');
const {getscore, getbatting, getfielding} = require('../Controller/frontend/frontendController')
//const { passport } = require('../Config/passports');

//Auth route
router.post('/user/login',loginvali,login);
router.post('/user/register',registervali,register);

router.get('/getscore',getscore);
router.get('/getbatting',getbatting);
router.get('/getfielding',getfielding);

let api = router;
module.exports = api;