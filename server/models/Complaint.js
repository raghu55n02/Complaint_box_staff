const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    dept: {
        type: String
    },
    content: {
        type: String
    },
    mode:{
         type: String
    },
    rollno:{
        type:String
    },
    stat:{
        type:String
    },
    assignedto:{
        type:String,
        default:""
    }

}, { timestamps: true })


const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = { Complaint }