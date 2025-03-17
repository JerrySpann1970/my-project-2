const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// GET /users/:userId/musicCds
router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('musicCDs/index.ejs', {
            myCDs: currentUser.myCDs,
        });
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
router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.myCDs.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/musicCDs`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// GET /users/:userId/musicCDs/:myCDId
router.get('/:myCDId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const myCD = currentUser.myCDs.id(req.params.myCDId);
        res.render('musicCDs/show.ejs', {
            myCD: myCD,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// DELETE /users/:userId/musicCDs/:nyCDsId
router.delete('/:myCDId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.myCDs.id(req.params.myCDId).deleteOne();
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/musicCDs`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

//GET /users/:userId/musicCDs/edit
router.get('/:myCDId/edit', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const myCD = currentUser.myCDs.id(req.params.applicationId);
        res.render('applications/edit.ejs', {
            myCD: myCD,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});

// 


module.exports = router;
