const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const config = require('config');
const jwt = require('jsonwebtoken');
// const mailgun = require("mailgun-js");
// const DOMAIN = 'oluwatstar21@gmail.com';
// const mg = mailgun({apiKey: '028b5eba208ded3de5555c82c24cdda4-a2b91229-f3fefa4e', domain: DOMAIN});

const User = require('../../models/User');
const Token = require('../../models/Token');

router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({msg: 'Please Enter all Fields'});
    }

    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exists' });

            jwt.sign(
                {},
                config.get('jwtSecret'),
                (err, token) => {
                    if(err) throw err;
                    const newUser = new User({
                        name,
                        email,
                        password,
                        token
                    });
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(user => {
                                    // const newToken = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
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
                                                    token: user.token,
                                                }
                                            });
                                        }
                                    )
                                });
                        });
                    });
                }
            )
        });
});

module.exports = router;