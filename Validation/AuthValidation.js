const { check } = require('express-validator');
const registervali = [
    check('name','Name is Requried').notEmpty(),
    check('phone','Phone is Requried').notEmpty(),
    check('username','Username is Requried').notEmpty(),
    check('password','Password must be in 6 charactors').isLength({min:6})
]

const loginvali = [
    check('username','Username is Requried').notEmpty(),
    check('password','Password Requried').notEmpty()
]

module.exports = {
    registervali,
    loginvali
}
