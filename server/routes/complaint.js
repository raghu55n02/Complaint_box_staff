const express = require('express');
const router = express.Router();
const {Complaint}=require("../models/Complaint")
const { auth } = require("../middleware/auth");
const {User}=require("../models/User")

router.get("/get/user",auth, (req,res)=>{
    console.log(user.body.userId)
    User.findById({"_id": req.body.userId })
        .exec((err, user) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, user })
        })
})

router.post("/getComplaints/user",auth, (req, res) => {
    console.log("you are here")
    console.log(req.body)
    Complaint.find({"writer": req.body.userId })
        .populate('writer')
        .exec((err, complaints) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, complaints })
        })
});

router.post("/update_assign",auth, (req,res) =>{
    Complaint.findOneAndUpdate({_id:req.body.complaintId},{$set:{stat:"assigned", assignedto:req.body.userfrom}}).exec((err,doc)=>{
        if(err) return res.status(400).json({success:true, err})
        res.status(200).json({success:true})
    })
    
})

router.post("/getComplaintscategory",auth, (req, res) => {
    console.log("you are here")
    console.log(req.body)
    //"dept": req.body.dept
    Complaint.find({"dept": req.body.dept, "stat":req.body.val})
        .populate('writer')
        .exec((err, complaints) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, complaints })
        })
});


router.post("/getComplaints",auth, (req, res) => {
    Complaint.find({})
        .populate('writer')
        .exec((err, complaints) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, complaints })
        })
});

module.exports = router;