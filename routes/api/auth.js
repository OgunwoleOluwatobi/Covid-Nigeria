const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
// const mailgun = require("mailgun-js");
// const DOMAIN = 'oluwatstar21@gmail.com';
// const mg = mailgun({apiKey: '028b5eba208ded3de5555c82c24cdda4-a2b91229-f3fefa4e', domain: DOMAIN});

const User = require('../../models/User');
const Token = require('../../models/Token');

router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({msg: 'Please Enter all Fields'});
    }

    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User Does not exists' });

            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });
                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    apiToken: user.token,
                                }
                            });
                        }
                    )
                })
        });
});

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})

module.exports = router;