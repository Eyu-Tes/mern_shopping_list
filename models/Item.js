const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    date: {
        type: Date, 
        default: Date.now
    }
})

module.exports = Item = mongoose.model('Item', ItemSchema)
