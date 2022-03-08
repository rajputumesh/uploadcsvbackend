const mongoose = require('mongoose');
const scoreSchema = new mongoose.Schema({
    battingScore:String,
    wickets:String,
    runsConceded:String,
    catches:String,
    stumps:String,
    opposition:String,
    ground:String,
    date:String,
    matchResult:String,
    resultMargin:String,
    toss:String,
    battingInnings:String,
});

module.exports = mongoose.model('score',scoreSchema);