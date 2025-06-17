const users = require('../Models/auth.js');
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    const { email, username, password } = req.body;
    console.log(req.body);
    const user = new users(req.body);
    await user.save();
    res.json(req.body);
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (!user) {
        res.json("false");
    }
    if (user.password === password) {
        const token = jwt.sign(
            { id: user._id, email: user.email },
            "123",
            { expiresIn: "40s" }
        );
        res.json(token);
    }
}

exports.verify = async (req, res) => {
    console.log("verify Token");
    console.log(req.body);
    const { token } = req.body;
    console.log(token);
    try {
        const decoded = jwt.verify(token, "123");
        res.json(true);
    } catch (error) {
        res.json(false);
    }
}