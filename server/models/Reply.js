const mongoose = require('mongoose');
const replySchema = mongoose.Schema({
    send_to: {
       type: String
    }, 
    dept: {
        type: String
    },
    content: {
        type: String
    }
}, { timestamps: true })


const  Reply= mongoose.model('Reply', replySchema);

module.exports = { Reply }