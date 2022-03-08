const { check } = require('express-validator');
const uploadfilevali = [
    check('score','File is Requried').notEmpty(),
]


module.exports = {
    uploadfilevali
}
