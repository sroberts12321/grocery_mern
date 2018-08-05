const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create Schema
const ItemSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    charclass : {
        type: String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    level : {
        type : Number,
    },
    race : {
        type : String
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)