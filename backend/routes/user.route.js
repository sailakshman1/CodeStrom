const express = require("express");
const router = express.Router();
const path = require("path");
const teamdb = require("../model/team.model");
const sendRegistrationEmail = require("../utils/sendMail"); // Add this

router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../frontend/index.html"));
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
});

router.get('/register', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../../frontend/RegestionsPage.html"));
    } catch (error) {
        res.status(404).json({ msg: error.message });
        console.log(error.message);
    }
});

router.post('/registertion', async (req, res) => {
    try {
        const body = req.body;
        console.log(body);

        const data = new teamdb(body);
        await data.save();
        
        await sendRegistrationEmail(body);

        res.status(202).json({ msg: "done" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message });
    }
});

router.get('/userdata', async (req, res) => {
    try {
        const data = await teamdb.find();
        if (data) {
            return res.status(202).json(data);
        }
        res.status(404).json({ msg: "No Data Found" });
    } catch (error) {
        res.json({ msg: error.message });
    }
});

module.exports = router;
