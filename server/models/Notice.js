const mongoose = require('mongoose');
const NoticeSchema = mongoose.Schema({ 
    content: {
        type: String
    }, 
    dept: {
        type: String
    }
}, { timestamps: true })


const  Notice= mongoose.model('Notice', NoticeSchema);

module.exports = { Notice }