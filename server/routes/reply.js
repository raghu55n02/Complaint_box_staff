const express = require('express');
const router = express.Router();
const {Reply}=require("../models/Reply")
router.post("/save_reply", (req, res) => {

    const reply = new Reply(req.body);

    reply.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

module.exports = router;