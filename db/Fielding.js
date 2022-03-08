const mongoose = require('mongoose');
const fieldingSchema = new mongoose.Schema({
    overs:String,
    mdns:String,
    runs:String,
    wkts:String,
    econ:String,
    pos:String,
    inns:String,
    dismisalMade:String,
    catchToken:String,
    opposition:String,
    ground:String,
    startDateAscending:String,
    matchNumber:String,
    result:String
});

module.exports = mongoose.model('fielding',fieldingSchema);