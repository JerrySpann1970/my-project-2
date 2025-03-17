const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// GET /users/:userId/musicCds
router.get('/', async (req, res) => {
    try {
        res.render('musicCDs/index.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// GET /users/:userId/musicCDs/new
router.get('/new', async (req, res) => {
    res.render('musicCDs/new.ejs');
});

// POST /users/:userId/musicCDs



module.exports = router;
