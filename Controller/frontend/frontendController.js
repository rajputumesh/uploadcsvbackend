require('../../db/config');
const Score = require('../../db/Score');
const Batting = require('../../db/Batting');
const Fielding = require('../../db/Fielding');

const getscore = (req, res) => {
    Score.find(function (err, scores) {
        res.status(301).json({
            message:"",
            scores:scores
        });
    });
}

const getbatting = (req, res) => {
    Batting.find(function (err, battings) {
        res.status(301).json({
            message:"",
            battings:battings
        });
    });
}

const getfielding = (req, res) => {
    Fielding.find(function (err, fieldings) {
        res.status(301).json({
            message:"",
            fieldings:fieldings
        });
    });
}
module.exports = {
    getscore,
    getbatting,
    getfielding
}