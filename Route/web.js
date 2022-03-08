const express = require('express');
const app = express();
let router = express.Router();

const { upload } = require('../Helper/uploadimage');
const { uploadScore, uploadFielding, uploadBatting } = require('../Controller/UploadController');

//==== routes============
router.get('/',(req, res)=>{
    console.log(req.query.msg);
    res.render('../view/index',{title:"Upload csv files", msg : req.query.msg});
});

router.post('/upload/score',upload.single('score'), uploadScore);
router.post('/upload/fielding',upload.single('fielding'), uploadFielding);
router.post('/upload/batting',upload.single('batting'), uploadBatting);

let web = router;
module.exports = web;