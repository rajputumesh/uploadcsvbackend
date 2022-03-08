const mongoose = require('mongoose');
const battingSchema = new mongoose.Schema({
    runs:String,
    mins:String,
    bf:String,
    fs:String,
    ss:String,
    sr:String,
    pos:String,
    dismisal:String,
    inns:String,
    opposition:String,
    ground:String,
    startDateAscending:String,
    matchNumber:String,
    result:String
});

module.exports = mongoose.model('batting',battingSchema);