const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PeopleSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    age: {
        type: Number,
        required: true
    }, 
    sex:{
       type: String,
       required: true 
    },
    complexion: {
        type: String,
        required: true
    },
    height:{
        type: Number,
        required: true
    },
    race: {
        type: String,
        required: true
    }
})

const People = mongoose.model('people', PeopleSchema)

module.exports = People