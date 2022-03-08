const csv = require('csv-parser');
const fs = require('fs');
require('../db/config');
const Score = require('../db/Score');
const Batting = require('../db/Batting');
const Fielding = require('../db/Fielding');

const uploadScore = (req, res) =>{
    const filename = req.file.filename;
    fs.createReadStream('./uploads/'+filename)
    .pipe(csv({}))
    .on('data', async (data) => {
        let score = new Score(data);
        await score.save();
    })
    .on('end',async () =>{
        var string = encodeURIComponent('Upload Successfully');
        res.redirect('/?msg='+string);
    });
}

const uploadBatting = (req, res) =>{
    const filename = req.file.filename;
    fs.createReadStream('./uploads/'+filename)
    .pipe(csv({}))
    .on('data', async (data) => {
        //console.log(data);
        let batting = new Batting(data);
        await batting.save();
    })
    .on('end',async () =>{
        res.redirect('/');
    });
}

const uploadFielding = (req, res) =>{
    const filename = req.file.filename;
    fs.createReadStream('./uploads/'+filename)
    .pipe(csv({}))
    .on('data', async (data) => {
        let fielding = new Fielding(data);
        await fielding.save();
    })
    .on('end',async () =>{
        res.redirect('/');
    });
}

module.exports = {
    uploadScore,
    uploadBatting,
    uploadFielding
}

//