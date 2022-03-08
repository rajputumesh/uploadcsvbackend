require('../db/config');
const User = require('../db/User');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const register = async (req, res, done) =>{
    var { name, phone, username, password } = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    if(!await User.findOne({email:username})){
        const email = username;
        var password = await bcrypt.hash(password, 10);
        let user = new User({ name, phone, email, password });
        await user.save((err,user)=>{
            if(err) return done(err)
            //req.user = user;
            if(user){
                res.status(200).json({
                    message:"Register successfully",
                    user:user
                });
                //return done(null,user);
            }  
        });
        
    }else{
        res.status(200).json({
            message:"UserName is already exist."
        }); 
    }
}

const login = async (req, res) =>{
    const {username, password}  = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.findOne({ email: username }, function (err, user) {
        if (err) {
            res.status(301).json({
                message:"login error",
                error:err
            });
        }
        if (!user) {
            res.status(301).json({
                message:"User Not Found",
            });
        } else {
            bcrypt.compare(password, user.password)
            .then(function(result) {
                if(result){
                    res.status(200).json({
                        message:"login success",
                        user:user
                    });
                }else{
                    res.status(301).json({
                        message:"Password Not Match."
                    });
                }
            });
        }
        
    });
}

module.exports = {
    register,
    login
}
