const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function signUp (req,res){
    try { //biar server ga crash
        // get the email and password off req body
        const {email, password} = req.body;

        // hash password
        const hashedPassword = bcrypt.hashSync(password, 8);

        // create a use with data
        await User.create({email, password: hashedPassword});

        // respond
        res.sendStatus(200);

    } catch(err){
        console.log(err);
        res.sendStatus(400);
    }
   
}

async function logIn (req,res){
    try{
        // get email pass of req body
        const {email, password} = req.body;

        // find user with req email
        const userFind = await User.findOne({email});
        if(!userFind) return res.sendStatus(401);
            
        // compare sent it pass with found userpassowrd hash
        const passwordMatch = bcrypt.compareSync(password, userFind.password);
        if(!passwordMatch) return res.sendStatus(401);

        // create jwt token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: userFind._id, exp: exp }, process.env.SECRET);

        // set cookies
        res.cookie('Authorization', token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        })
            
        // send jwt token
        res.sendStatus(200);
    } catch(err){
        console.log(err);
        res.sendStatus(400);
    }
  
}

function logOut (req,res){
    try{
        res.clearCookie('Authorization');
        res.sendStatus(200);
    } catch(err){
        console.log(err);
        res.sendStatus(400);
    }
}

function checkAuth(req,res){
    try{
        console.log(req.user);
        res.sendStatus(200);
    } catch(err){
        console.log(err);
        res.sendStatus(400);
    }
    
}

module.exports = {
    signUp, logIn, logOut, checkAuth,
}