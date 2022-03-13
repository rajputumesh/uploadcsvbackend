require('../../db/config');
const Score = require('../../db/Score');
const Batting = require('../../db/Batting');
const Fielding = require('../../db/Fielding');

const getscore = (req, res) => {
    Score.find(function (err, scores) {
        console.log(scores);
        res.status(200).json(scores); 
    });
}
 
const getbatting = (req, res) => {
    Batting.find(function (err, battings) {
        console.log(battings);
        res.status(200).json(battings);
    });
}

const getfielding = (req, res) => {
    Fielding.find(function (err, fieldings) {
        console.log(fieldings);
        res.status(200).json(fieldings);
    });
}
module.exports = {
    getscore,
    getbatting,
    getfielding
}