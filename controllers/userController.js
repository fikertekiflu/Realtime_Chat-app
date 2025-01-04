const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const dotenv = require ('dotenv');
const User =  require("../models/User")

dotenv.config();

const register =  async (req , res) =>{
    const { username, email, password  } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'email already registered'})
        }
        const hashedPassword =  await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({message: 'User registered.'})

    }catch (error) {
        res.status(500).json({message: 'failed to registerd'})
    };
};

const login = async (req, res) =>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email});
        if (!user || !(await bcrypt.compare(password, user.password))){
            return res.status(400).json({message: 'Invalid email or password'});
     }
     const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET)

     res.json({
        token,
        userID: user._id,
        username: user.user.username,
    })
 } catch ( error ) {
    res.status(500).json({message: 'login failed', error: error.message});

 }
}

module.exports = {
    register,
    login,
};

